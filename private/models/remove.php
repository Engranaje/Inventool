<?php

class RemoveModel extends Model
{
    /**
     * Show remove view.
     */
    public function index()
    {
        // Find all records
        $this->query('SELECT * FROM stock WHERE deleted_at IS NULL');
        $stock = $this->resultset();

        return [
            'records' => $stock,
        ];
    }

    /**
     * Remove entry.
     */
    public function entry()
    {
        if (!isset($_POST['token'])) {
            return;
        }

        $error_message = 'No se pudo registrar la salida. <br /> Por favor, intente de nuevo.';
        $token_message = 'Se ha agotado el tiempo de espera o lo ha intentado demasiado rápido. <br /> Por favor, recargue e intente de nuevo.';

        if (Functions::form_success($_SESSION['token'], $_POST['token'], $error_message, true, $token_message, true)) {
            // Form data
            $data = Functions::form_data([
                'date',
                ['array' => 'code'],
                ['array' => 'types'],
                ['array' => 'previous'],
                ['array' => 'quantity'],
                'notes',
            ]);

            // User
            $session = new Functions();
            $user_id = $session->getUserId();

            try {
                // Insert transaction
                $this->query('INSERT INTO transaction (type, user_id, notes, date) VALUES (:type, :user, :notes, :date)');
                $this->bind(':type', 2);
                $this->bind(':user', $user_id);
                $this->bind(':notes', $data['notes']);
                $this->bind(':date', $data['date']);
                $this->execute();
                $trans_code = $this->lastInsertId();

                // Insert log
                $this->query('INSERT INTO log (trans_code) VALUES (:trans_code)');
                $this->bind(':trans_code', $trans_code);
                $this->execute();

                foreach ($data['types'] as $key => $type) {
                    switch ($type) {
                        case 'single':
                                $this->query('UPDATE stock SET stock = stock - :quantity WHERE code = :code');
                                $this->bind(':quantity', $data['quantity'][$key]);
                                $this->bind(':code', $data['code'][$key]);
                                $this->execute();

                                // Search kits to which belongs component
                                $this->query('SELECT stock.*, kit_components.* FROM stock
                                        JOIN kit_components
                                            ON kit_components.component_id = stock.code
                                        WHERE code = :code');
                                $this->bind(':code', $data['code'][$key]);
                                $kits = $this->resultset();

                                $this->refresh_kits($kits);

                                break;

                        case 'kit':
                                $this->query('UPDATE stock SET stock = stock - :quantity WHERE code = :code');
                                $this->bind(':quantity', $data['quantity'][$key]);
                                $this->bind(':code', $data['code'][$key]);
                                $this->execute();

                                // Search kit components
                                $this->query('SELECT stock.*, kit_components.* FROM stock
                                    LEFT JOIN kit_components
                                        ON kit_components.component_id = stock.code
                                    WHERE kit_id = :code');
                                $this->bind(':code', $data['code'][$key]);
                                $kits_info = $this->resultset();

                                foreach ($kits_info as $kit) {
                                    // Ignore services for stock calculation
                                    if ($kit['type'] != 'service') {
                                        // Update kit components stock
                                        $kit_quantity = $kit['quantity'] * $data['quantity'][$key];
                                        $this->query('UPDATE stock SET stock = stock - :quantity WHERE code = :code');
                                        $this->bind(':quantity', $kit_quantity);
                                        $this->bind(':code', $kit['component_id']);
                                        $this->execute();

                                        // Search kits to which belongs component
                                        $this->query('SELECT stock.*, kit_components.* FROM stock
                                                    JOIN kit_components
                                                        ON kit_components.component_id = stock.code
                                                    WHERE code = :code');
                                        $this->bind(':code', $kit['component_id']);
                                        $kits = $this->resultset();

                                        $this->refresh_kits($kits);
                                    }
                                }

                                break;

                        default:
                            break;
                    }

                    // Insert records
                    $this->query('INSERT INTO stock_transaction (stock_code, trans_code, previous, amount)
                                                VALUES (:stock_code, :trans_code, :previous, :amount)');
                    $this->bind(':stock_code', $data['code'][$key]);
                    $this->bind(':trans_code', $trans_code);
                    $this->bind(':previous', $data['previous'][$key]);
                    $this->bind(':amount', $data['quantity'][$key]);
                    $this->execute();
                }

                Functions::flash('success', 'La salida ha sido registrada correctamente.');
            } catch (\Exception $e) {
                Functions::flash('error', 'Hubo un error intentando registrar la salida. <br /> Por favor, intente de nuevo.');
            }
        }

        header('Location:'.ROOT_URL);
    }

    private function refresh_kits(array $kits)
    {
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
                // Ignore services for kit stock calculation
                if ($kit_info['type'] != 'service') {
                    // Result = rounded down value of component stock divided by inserted quantity
                    $result = floor((int) $kit_info['stock'] / $kit_info['quantity']);
                    array_push($components_quantity, $result);
                }
            }

            $kit_stock = min($components_quantity);

            // Update kit stock
            $this->query('UPDATE stock SET stock = :quantity WHERE code = :code');
            $this->bind(':quantity', $kit_stock);
            $this->bind(':code', $kit['kit_id']);
            $this->execute();
        }
    }
}
