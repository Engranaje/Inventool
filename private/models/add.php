<?php
class AddModel extends Model
{
    /**
     * Show add view
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
     * Add new entry
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

                    // Stock
                    if (isset($_POST['stock']) && !empty($_POST['stock'])) {
                        $stock = filter_var_array($_POST['stock'], FILTER_VALIDATE_INT);
                    }

                    // Notes
                    if (isset($_POST['notes']) && !empty($_POST['notes'])) {
                        $notes = filter_var($_POST['notes'], FILTER_SANITIZE_STRING);
                    }

                    try {
                        // Insert transaction
                        $this->query('INSERT INTO transaction (type, notes, date) VALUES (:type, :notes, :date)');
                        $this->bind(':type', 1);
                        $this->bind(':notes', $notes);
                        $this->bind(':date', $date);
                        $this->execute();
                        $trans_code = $this->lastInsertId();

                        // Insert log
                        $this->query('INSERT INTO log (trans_code) VALUES (:trans_code)');
                        $this->bind(':trans_code', $trans_code);
                        $this->execute();

                        foreach ($code as $key => $value) {
                            $this->query('UPDATE stock SET stock = stock + :stock WHERE code = :code');
                            $this->bind(':stock', $stock[$key]);
                            $this->bind(':code', $code[$key]);
                            $this->execute();

                            // Insert records
                            $this->query('INSERT INTO stock_transaction (stock_code, trans_code, amount) VALUES (:stock_code, :trans_code, :amount)');
                            $this->bind(':stock_code', $code[$key]);
                            $this->bind(':trans_code', $trans_code);
                            $this->bind(':amount', $stock[$key]);
                            $this->execute();
                        }

                        Functions::flash('success', 'La entrada ha sido registrada correctamente.');
                    } catch (\Exception $e) {
                        Functions::flash('error', 'Hubo un error intentando registrar la entrada. <br /> Por favor, intente de nuevo.');
                    }
                } else {
                    Functions::flash('error', 'Se ha agotado el tiempo de espera. <br /> Por favor, recargue e intente de nuevo.');
                }
            } else {
                Functions::flash('error', 'No se pudo registrar la entrada. <br /> Por favor, intente de nuevo.');
            }

        } else {
            Functions::flash('error', 'No se pudo registrar la entrada. <br /> Por favor, intente de nuevo.');
        }

        header('Location:' . ROOT_URL);
    }
}
