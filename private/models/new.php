<?php
class NewModel extends Model
{
    /**
     * Show new view
     */
    public function index()
    {
        return;
    }

    /**
     * Create new record
     */
    public function create()
    {
        if (isset($_SESSION['token']) &&
            isset($_POST['token']) &&
            !empty($_SESSION['token']) &&
            !empty($_POST['token'])) {

            if ($_POST['token'] === $_SESSION['token']) {
                $tokenAge = time() - $_SESSION['token_time'];

                // Only continue if time passed in form is greater than 1 seconds and less than 5 minutes
                if ($tokenAge > 1 && $tokenAge < 250) {

                    // Description
                    if (isset($_POST['description']) && !empty($_POST['description'])) {
                        $description = filter_var($_POST['description'], FILTER_SANITIZE_STRING);
                    }

                    // Stock
                    if (isset($_POST['stock']) && !empty($_POST['stock'])) {
                        $stock = filter_var($_POST['stock'], FILTER_VALIDATE_INT);
                    }

                    try {
                        $this->query('INSERT INTO stock (description, stock) VALUES (:description, :stock)');
                        $this->bind(':description', $description);
                        $this->bind(':stock', $stock);
                        $this->execute();

                        if ($this->lastInsertId() > 0) {
                            Functions::flash('success', 'Registro creado correctamente.');
                        } else {
                            Functions::flash('error', 'No se pudo crear el registro. <br /> Por favor, intente de nuevo.');
                        }
                    } catch (\Exception $e) {
                        Functions::flash('error', 'Hubo un error intentando crear el registro.');
                    }
                } else {
                    Functions::flash('error', 'Se ha agotado el tiempo de espera. <br /> Por favor, recargue e intente de nuevo.');
                }
            } else {
                Functions::flash('error', 'Hubo un error. <br /> Por favor, recargue e intente de nuevo.');
            }
        } else {
            Functions::flash('error', 'Hubo un error. <br /> Por favor, recargue e intente de nuevo.');
        }

        header('Location:'.ROOT_URL);
    }
}
