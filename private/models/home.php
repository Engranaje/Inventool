<?php
class HomeModel extends Model
{
    /**
     * Show homepage
     */
    public function index()
    {
        // Find all records
        $this->query('SELECT * FROM stock WHERE deleted_at IS NULL');
        $stock = $this->resultset();

        return $stock;
    }

    /**
     * Update record
     */
    public function update()
    {
        if (isset($_POST['validate_field'])) {
            if (isset($_SESSION['token']) &&
                isset($_POST['token']) &&
                !empty($_SESSION['token']) &&
                !empty($_POST['token'])) {
                if ($_POST['token'] === $_SESSION['token']) {
                    $tokenAge = time() - $_SESSION['token_time'];

                    // Only continue if time passed in form is greater than 1 seconds and less than 5 minutes
                    if ($tokenAge > 1 && $tokenAge < 250) {
                        if (isset($_POST['code']) && !empty($_POST['code'])) {
                            $code = filter_var($_POST['code'], FILTER_VALIDATE_INT);
                        }

                        if (isset($_POST['description']) && !empty($_POST['description'])) {
                            $description = filter_var($_POST['description'], FILTER_SANITIZE_STRING);
                        }

                        try {
                            $this->query('UPDATE stock SET description = :description WHERE code = :code');
                            $this->bind(':description', $description);
                            $this->bind(':code', $code);
                            $this->execute();

                            Functions::flash('success', 'El registro se ha actualizado correctamente.');
                        } catch (\Exception $e) {
                            Functions::flash('error', 'Hubo un error intentando actualizar el registro.');
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
        } else {
            Functions::flash('error', 'Hubo un error. <br /> Por favor, recargue e intente de nuevo.');
        }

        header('Location:' . ROOT_URL);
    }

    /**
     * Delete record
     */
    public function delete()
    {
        if (isset($_POST['code']) && !empty($_POST['code'])) {
            $code = filter_var($_POST['code'], FILTER_VALIDATE_INT);
        }

        try {
            // If record belongs to a kit, it can't be deleted
            $this->query('SELECT stock.*, kit_components.* FROM stock
                        JOIN kit_components
                            ON kit_components.component_id = stock.code
                        WHERE code = :code');
            $this->bind(':code', $code);
            $kits = $this->resultset();

            if (!empty($kits) && $kits[0]['type'] != 'kit') {
                Functions::flash('error', 'Este artículo pertenece a un kit. No puede ser eliminado.');
                header('Location:' . ROOT_URL);
                return;
            }

            // Delete record
            $this->query('UPDATE stock SET deleted_at = :deleted WHERE code = :code');
            $this->bind(':deleted', Functions::now());
            $this->bind(':code', $code);
            $this->execute();

            Functions::flash('success', 'Registro eliminado correctamente.');
        } catch (\Exception $e) {
            Functions::flash('error', 'Hubo un error. <br /> Por favor, recargue e intente de nuevo.');
        }

        header('Location:' . ROOT_URL);
    }
}
