<?php
class LogModel extends Model
{
    /**
     * Show log view
     */
    public function index()
    {
        // Find all records
        $this->query('SELECT log.*, transaction.*, stock_transaction.*, stock.description FROM log
                    JOIN transaction
                        ON log.trans_code = transaction.id
                    JOIN stock_transaction
                        ON stock_transaction.trans_code = transaction.id
                    JOIN stock
                        ON stock_transaction.stock_code = stock.code
                    GROUP BY transaction.id
                    ORDER BY transaction.date ASC');
        $log = $this->resultset();

        return [
            'log' => $log,
        ];
    }

    /**
     * Show transaction details view
     */
    public function show($id)
    {
        // Find transaction
        $this->query('SELECT stock_transaction.*, stock.description FROM stock_transaction
                    JOIN stock
                        ON stock_transaction.stock_code = stock.code
                    WHERE stock_transaction.trans_code = :code');
        $this->bind(':code', $id);
        $transaction = $this->resultset();

        // Find transaction type, date and notes
        $this->query('SELECT * FROM transaction
                    WHERE id = :id');
        $this->bind(':id', $id);
        $data = $this->singleRow();

        return [
            'transaction' => $transaction,
            'data' => $data,
        ];
    }

    /**
     * Filter log view
     */
    public function filter($id)
    {
        // Find all records
        $this->query('SELECT log.*, transaction.*, stock_transaction.*, stock.description  FROM log
                    JOIN transaction
                        ON log.trans_code = transaction.id
                    JOIN stock_transaction
                        ON transaction.id = stock_transaction.trans_code
                    JOIN stock
                        ON stock.code = stock_transaction.stock_code
                    WHERE stock_transaction.stock_code = :stock_code
                    ORDER BY transaction.date ASC');
        $this->bind(':stock_code', $id);
        $log = $this->resultset();

        $description = ($log) ? $log[0]['description'] : '';

        return [
            'log' => $log,
            'filter' => true,
            'record' => $description,
        ];
    }

    /**
     * Reverse transaction
     */
    public function reverse($id)
    {
        // Find transaction
        $this->query('SELECT * FROM stock_transaction WHERE trans_code = :code');
        $this->bind(':code', $id);
        $transactions = $this->resultSet();

        // Select transaction type
        $this->query('SELECT type FROM transaction WHERE id = :trans_code');
        $this->bind(':trans_code', $id);
        $type = $this->singleRow();

        // Delete transaction
        $this->query('DELETE FROM transaction WHERE id = :trans_code');
        $this->bind(':trans_code', $id);
        $this->execute();

        try {
            switch ($type['type']) {
                case '1':{
                        foreach ($transactions as $transaction) {
                            // Codes to delete
                            $stock_code = $transaction['stock_code'];

                            // Rest amount if it's an entry
                            $this->query('UPDATE stock SET stock = stock - :amount WHERE code = :code');
                            $this->bind(':code', $stock_code);
                            $this->bind(':amount', $transaction['amount']);
                            $this->execute();

                            // Search record
                            $this->query('SELECT stock.*, kit_components.* FROM stock
                                        LEFT JOIN kit_components
                                            ON kit_components.component_id = stock.code
                                        WHERE code = :code');
                            $this->bind(':code', $stock_code);
                            $record = $this->singleRow();

                            switch ($record['type']) {
                                case 'kit':{
                                        // Search kit components
                                        $this->query('SELECT stock.*, kit_components.* FROM stock
                                                LEFT JOIN kit_components
                                                    ON kit_components.component_id = stock.code
                                                WHERE kit_id = :code');
                                        $this->bind(':code', $stock_code);
                                        $kits_info = $this->resultset();

                                        foreach ($kits_info as $kit_info) {
                                            // Update kit components stock
                                            $component_quantity = $kit_info['quantity'] * $transaction['amount'];
                                            $this->query('UPDATE stock SET stock = stock - :quantity WHERE code = :code');
                                            $this->bind(':quantity', $component_quantity);
                                            $this->bind(':code', $kit_info['component_id']);
                                            $this->execute();
                                        }
                                        break;
                                    }
                                case 'single':{
                                        // Search kits to which belongs component
                                        $this->query('SELECT stock.*, kit_components.* FROM stock
                                                JOIN kit_components
                                                    ON kit_components.component_id = stock.code
                                                WHERE code = :code');
                                        $this->bind(':code', $stock_code);
                                        $kits = $this->resultset();

                                        // Loop through each kit to update stock
                                        foreach ($kits as $kit) {
                                            // Search kits info
                                            $this->query('SELECT stock.*, kit_components.* FROM stock
                                                LEFT JOIN kit_components
                                                    ON kit_components.component_id = stock.code
                                                WHERE kit_id = :code');
                                            $this->bind(':code', $kit['kit_id']);
                                            $kits_info = $this->resultset();

                                            // Calculate component quantity to set kit stock a min result
                                            $components_quantity = [];

                                            foreach ($kits_info as $kit_info) {
                                                // Result = rounded down value of component stock divided by inserted quantity
                                                $result = floor((int) $kit_info['stock'] / $kit_info['quantity']);
                                                array_push($components_quantity, $result);
                                            }

                                            $kit_stock = min($components_quantity);

                                            // Update kit stock
                                            $this->query('UPDATE stock SET stock = :quantity WHERE code = :code');
                                            $this->bind(':quantity', $kit_stock);
                                            $this->bind(':code', $kit['kit_id']);
                                            $this->execute();
                                        }

                                        break;
                                    }
                                default:
                                    break;
                            }
                        }

                        Functions::flash('success', 'La transacción ha sido revertida correctamente.');

                        break;
                    }
                case '2':{
                        foreach ($transactions as $transaction) {
                            // Codes to delete
                            $stock_code = $transaction['stock_code'];

                            // Add amount if it's an output
                            $this->query('UPDATE stock SET stock = stock + :amount WHERE code = :code');
                            $this->bind(':code', $stock_code);
                            $this->bind(':amount', $transaction['amount']);
                            $this->execute();

                            // Search kit
                            $this->query('SELECT stock.*, kit_components.* FROM stock
                                        LEFT JOIN kit_components
                                            ON kit_components.component_id = stock.code
                                        WHERE code = :code');
                            $this->bind(':code', $stock_code);
                            $record = $this->singleRow();

                            switch ($record['type']) {
                                case 'kit':{
                                        // Search kit components
                                        $this->query('SELECT stock.*, kit_components.* FROM stock
                                                LEFT JOIN kit_components
                                                    ON kit_components.component_id = stock.code
                                                WHERE kit_id = :code');
                                        $this->bind(':code', $stock_code);
                                        $kits_info = $this->resultset();

                                        foreach ($kits_info as $kit_info) {
                                            // Update kit components stock
                                            $component_quantity = $kit_info['quantity'] * $transaction['amount'];
                                            $this->query('UPDATE stock SET stock = stock + :quantity WHERE code = :code');
                                            $this->bind(':quantity', $component_quantity);
                                            $this->bind(':code', $kit_info['component_id']);
                                            $this->execute();
                                        }
                                        break;
                                    }
                                case 'single':{
                                        // Search kits to which belongs component
                                        $this->query('SELECT stock.*, kit_components.* FROM stock
                                                JOIN kit_components
                                                    ON kit_components.component_id = stock.code
                                                WHERE code = :code');
                                        $this->bind(':code', $stock_code);
                                        $kits = $this->resultset();

                                        // Loop through each kit to update stock
                                        foreach ($kits as $kit) {
                                            // Search kits info
                                            $this->query('SELECT stock.*, kit_components.* FROM stock
                                                LEFT JOIN kit_components
                                                    ON kit_components.component_id = stock.code
                                                WHERE kit_id = :code');
                                            $this->bind(':code', $kit['kit_id']);
                                            $kits_info = $this->resultset();

                                            // Calculate component quantity to set kit stock a min result
                                            $components_quantity = [];

                                            foreach ($kits_info as $kit_info) {
                                                // Result = rounded down value of component stock divided by inserted quantity
                                                $result = floor((int) $kit_info['stock'] / $kit_info['quantity']);
                                                array_push($components_quantity, $result);
                                            }

                                            $kit_stock = min($components_quantity);

                                            // Update kit stock
                                            $this->query('UPDATE stock SET stock = :quantity WHERE code = :code');
                                            $this->bind(':quantity', $kit_stock);
                                            $this->bind(':code', $kit['kit_id']);
                                            $this->execute();
                                        }

                                        break;
                                    }
                                default:
                                    break;
                            }
                        }

                        Functions::flash('success', 'La transacción ha sido revertida correctamente.');

                        break;
                    }
                default:
                    break;
            }
        } catch (\Exception $e) {
            Functions::flash('error', 'No se pudo revertir la transacción. <br /> Por favor, intente de nuevo.');
        }

        header('Location:' . ROOT_URL);
    }
}
