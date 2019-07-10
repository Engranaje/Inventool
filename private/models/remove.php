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
                    // Date
                    if (isset($_POST['date']) && !empty($_POST['date'])) {
                        $date = filter_var($_POST['date'], FILTER_SANITIZE_STRING);
                    }

                    // Code
                    if (isset($_POST['code']) && !empty($_POST['code'])) {
                        $code = filter_var_array($_POST['code'], FILTER_SANITIZE_STRING);
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

                        foreach ($code as $key => $value) {
                            $this->query('UPDATE stock SET stock = stock - :quantity WHERE code = :code');
                            $this->bind(':quantity', $quantity[$key]);
                            $this->bind(':code', $code[$key]);
                            $this->execute();

                            // Insert records
                            $this->query('INSERT INTO stock_transaction (stock_code, trans_code, previous, amount) VALUES (:stock_code, :trans_code, :previous, :amount)');
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
