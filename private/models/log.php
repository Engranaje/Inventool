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
                    GROUP BY transaction.notes
                    ORDER BY transaction.date ASC');
        $log = $this->resultset();

        return [
            'log' => $log
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

        return [
            'log' => $log,
            'filter' => true,
            'record' => $log[0]['description']
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

        // Reverse amount in stock
        if ($type['type'] == '1') {
            try {

                foreach ($transactions as $transaction) {
                    // Codes to delete
                    $stock_code = $transaction['stock_code'];

                    // Rest amount if it's an entry
                    $this->query('UPDATE stock SET stock = stock - :amount WHERE code = :code');
                    $this->bind(':code', $stock_code);
                    $this->bind(':amount', $transaction['amount']);
                    $this->execute();
                }

                Functions::flash('success', 'La transacción ha sido revertida correctamente.');
            } catch (\Exception $e) {
                Functions::flash('error', 'No se pudo revertir la transacción. <br /> Por favor, intente de nuevo.');
            }
        } else if ($type['type'] == '2') {
            try {
                foreach ($transactions as $transaction) {
                    // Codes to delete
                    $stock_code = $transaction['stock_code'];

                    // Add amount if it's an output
                    $this->query('UPDATE stock SET stock = stock + :amount WHERE code = :code');
                    $this->bind(':code', $stock_code);
                    $this->bind(':amount', $transaction['amount']);
                    $this->execute();
                }

                Functions::flash('success', 'La transacción ha sido revertida correctamente.');
            } catch (\Exception $e) {
                Functions::flash('error', 'No se pudo revertir la transacción. <br /> Por favor, intente de nuevo.');
            }
        }

        header('Location:' . ROOT_URL);
    }
}
