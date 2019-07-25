<?php
class RemoveModel extends Model
{
    /**
     * Show remove view
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
     * Remove entry
     */
    public function entry()
    {
        if (isset($_SESSION['token']) &&
            isset($_POST['token']) &&
            !empty($_SESSION['token']) &&
            !empty($_POST['token'])) {

            if ($_POST['token'] === $_SESSION['token']) {
                $tokenAge = time() - $_SESSION['token_time'];

                // Only continue if time passed in form is greater than 1 seconds and less than 5 minutes
                if ($tokenAge > 1 && $tokenAge < 250) {
                    // Prevent submitting more than once
                    if ($_SESSION['submitted'] == false) {
                        // Date
                        if (isset($_POST['date']) && !empty($_POST['date'])) {
                            $date = filter_var($_POST['date'], FILTER_SANITIZE_STRING);
                        }

                        // Code
                        if (isset($_POST['code']) && !empty($_POST['code'])) {
                            $code = filter_var_array($_POST['code'], FILTER_SANITIZE_STRING);
                        }

                        // Type
                        if (isset($_POST['type']) && !empty($_POST['type'])) {
                            $types = filter_var_array($_POST['type'], FILTER_SANITIZE_STRING);
                            // arsort($types);
                        }

                        // Previous
                        if (isset($_POST['previous']) && !empty($_POST['previous'])) {
                            $previous = filter_var_array($_POST['previous'], FILTER_VALIDATE_INT);
                        }

                        // Quantity
                        if (isset($_POST['quantity']) && !empty($_POST['quantity'])) {
                            $quantity = filter_var_array($_POST['quantity'], FILTER_VALIDATE_INT);
                        }

                        // Notes
                        if (isset($_POST['notes']) && !empty($_POST['notes'])) {
                            $notes = filter_var($_POST['notes'], FILTER_SANITIZE_STRING);
                        }

                        try {
                            // Insert transaction
                            $this->query('INSERT INTO transaction (type, notes, date) VALUES (:type, :notes, :date)');
                            $this->bind(':type', 2);
                            $this->bind(':notes', $notes);
                            $this->bind(':date', $date);
                            $this->execute();
                            $trans_code = $this->lastInsertId();

                            // Insert log
                            $this->query('INSERT INTO log (trans_code) VALUES (:trans_code)');
                            $this->bind(':trans_code', $trans_code);
                            $this->execute();

                            foreach ($types as $key => $type) {
                                switch ($type) {
                                    case 'single':{
                                            $this->query('UPDATE stock SET stock = stock - :quantity WHERE code = :code');
                                            $this->bind(':quantity', $quantity[$key]);
                                            $this->bind(':code', $code[$key]);
                                            $this->execute();

                                            // Search kits to which belongs component
                                            $this->query('SELECT stock.*, kit_components.* FROM stock
                                                    JOIN kit_components
                                                        ON kit_components.component_id = stock.code
                                                    WHERE code = :code');
                                            $this->bind(':code', $code[$key]);
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

                                            break;
                                        }
                                    case 'kit':{
                                            $this->query('UPDATE stock SET stock = stock - :quantity WHERE code = :code');
                                            $this->bind(':quantity', $quantity[$key]);
                                            $this->bind(':code', $code[$key]);
                                            $this->execute();

                                            // Search kit components
                                            $this->query('SELECT stock.*, kit_components.* FROM stock
                                                LEFT JOIN kit_components
                                                    ON kit_components.component_id = stock.code
                                                WHERE kit_id = :code');
                                            $this->bind(':code', $code[$key]);
                                            $kits_info = $this->resultset();

                                            foreach ($kits_info as $kit) {
                                                // Ignore services for stock calculation
                                                if ($kit['type'] != 'service') {
                                                    // Update kit components stock
                                                    $kit_quantity = $kit['quantity'] * $quantity[$key];
                                                    $this->query('UPDATE stock SET stock = stock - :quantity WHERE code = :code');
                                                    $this->bind(':quantity', $kit_quantity);
                                                    $this->bind(':code', $kit['component_id']);
                                                    $this->execute();
                                                }
                                            }

                                            break;
                                        }
                                    default:
                                        break;
                                }

                                // Insert records
                                $this->query('INSERT INTO stock_transaction (stock_code, trans_code, previous, amount)
                                            VALUES (:stock_code, :trans_code, :previous, :amount)');
                                $this->bind(':stock_code', $code[$key]);
                                $this->bind(':trans_code', $trans_code);
                                $this->bind(':previous', $previous[$key]);
                                $this->bind(':amount', $quantity[$key]);
                                $this->execute();
                            }

                            Functions::flash('success', 'La salida ha sido registrada correctamente.');
                        } catch (\Exception $e) {
                            Functions::flash('error', 'Hubo un error intentando registrar la salida. <br /> Por favor, intente de nuevo.');
                        }

                        $_SESSION['submitted'] = true;
                    }
                } else {
                    Functions::flash('error', 'Se ha agotado el tiempo de espera. <br /> Por favor, recargue e intente de nuevo.');
                }
            } else {
                Functions::flash('error', 'No se pudo registrar la salida. <br /> Por favor, intente de nuevo.');
            }

        } else {
            Functions::flash('error', 'No se pudo registrar la salida. <br /> Por favor, intente de nuevo.');
        }

        header('Location:' . ROOT_URL);
    }
}
