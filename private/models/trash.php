<?php
class TrashModel extends Model
{
    /**
     * Show Trash view
     */
    public function index()
    {
        // Find all deleted records
        $this->query('SELECT * FROM stock WHERE deleted_at IS NOT NULL');
        $records = $this->resultset();

        return $records;
    }

    /**
     * Recover record from trash
     */
    public function recover()
    {
        // Record to recover
        if (isset($_POST['code']) && !empty($_POST['code'])) {
            $code = filter_var($_POST['code'], FILTER_VALIDATE_INT);
        }

        try {
            // Recover record
            $this->query('UPDATE stock SET deleted_at = :value WHERE code = :code');
            $this->bind(':value', null);
            $this->bind(':code', $code);
            $this->execute();

            Functions::flash('success', 'El registro ha sido recuperado correctamente.');
        } catch (\Exception $e) {
            Functions::flash('error', 'Hubo un error intentando recuperar el registro. <br /> Por favor, intente de nuevo.');
        }

        header('Location:' . ROOT_URL);
    }

    /**
     * Permanently delete record from trash
     */
    public function delete()
    {
        // Record to recover
        if (isset($_POST['code']) && !empty($_POST['code'])) {
            $code = filter_var($_POST['code'], FILTER_VALIDATE_INT);
        }

        try {
            // Delete record
            $this->query('DELETE FROM stock WHERE code = :code');
            $this->bind(':code', $code);
            $this->execute();

            Functions::flash('success', 'El registro ha sido eliminado permanentemente.');
        } catch (\Exception $e) {
            Functions::flash('error', 'Hubo un error intentando eliminar el registro. <br /> Por favor, intente de nuevo.');
        }

        header('Location:' . ROOT_URL);
    }
}
