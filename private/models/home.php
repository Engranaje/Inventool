<?php
class HomeModel extends Model
{
    /**
     * Show homepage
     */
    public function index()
    {
        $stock = null;
        if(DEMO_MODE){
            $address = address();
            $this->query('SELECT * FROM demo WHERE address = :address');
            $this->bind(':address', $address);
            $user = $this->singleRow();

            if($user){
                $time = time() - strtotime($user['created_at']);
                $model = new AuthModel();
                $model->cleanDB();

                if($time > 60 * 30 || $time < 0){
                    logout();
                }
            }

            $this->query('SELECT * FROM stock WHERE deleted_at IS NULL AND demo_id = :demo_id');
            $this->bind(':demo_id', $user['id']);
            $stock = $this->resultset();
        }else{
            // Find all records
            $this->query('SELECT * FROM stock WHERE deleted_at IS NULL');
            $stock = $this->resultset();
        }

        // Determine if any item has notifications active
        $notification = false;
        foreach ($stock as $key => $value) {
            if ($value['notification'] != null){
                if ($value['stock'] <= $value['notification']){
                    $notification = true;
                }
            }
        }

        return [
            'stock' => $stock,
            'notification' => $notification
        ];
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
                if ($_POST['token'] == $_SESSION['token']) {
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

                            flash('success', 'El registro se ha actualizado correctamente.');
                        } catch (\Exception $e) {
                            flash('error', 'Hubo un error intentando actualizar el registro.');
                        }
                    } else {
                        flash('error', 'Se ha agotado el tiempo de espera. <br /> Por favor, recargue e intente de nuevo.');
                    }
                } else {
                    flash('error', 'Hubo un error. <br /> Por favor, recargue e intente de nuevo.');
                }
            } else {
                flash('error', 'Hubo un error. <br /> Por favor, recargue e intente de nuevo.');
            }
        } else {
            flash('error', 'Hubo un error. <br /> Por favor, recargue e intente de nuevo.');
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
                flash('error', 'Este artículo pertenece a un kit. No puede ser eliminado.');
                header('Location:' . ROOT_URL);
                return;
            }

            // Delete record
            $this->query('UPDATE stock SET deleted_at = :deleted WHERE code = :code');
            $this->bind(':deleted', now());
            $this->bind(':code', $code);
            $this->execute();

            flash('success', 'Registro eliminado correctamente.');
        } catch (\Exception $e) {
            flash('error', 'Hubo un error. <br /> Por favor, recargue e intente de nuevo.');
        }

        header('Location:' . ROOT_URL);
    }
}
