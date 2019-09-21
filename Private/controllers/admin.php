<?php
class Admin extends Controller
{
    protected $model;
    protected $user;

    /**
     * Function to call model
     */
    public function callModel()
    {
        $this->user = new Functions();
        $this->model = new AdminModel();
    }

    /**
     * Show administration page
     */
    protected function index()
    {
        $this->callModel();

        if ($this->user->is_admin()) {
            $this->returnView(null, 'main');
        } else {
            header('Location:' . ROOT_URL . '/errors/403.php');
        }
    }

    /**
     * Call user actions
     */
    protected function user()
    {
        $this->callModel();

        // Access user routes in administration us user is an administrator
        if ($this->user->is_admin()) {
            if ($this->secondAction == 'edit') {
                // Edit user
                $this->returnView($this->model->edit_user($this->id), 'main');
            } else if ($this->secondAction == 'update') {
                // Update user if not itself
                if ($this->id != $_SESSION['user_id']) {
                    $this->model->update_user($this->id);
                } else {
                    Functions::flash('error', 'No puede actualizar su usuario desde esta página');
                    header('Location:' . ROOT_URL . '/admin');
                }
            } else if ($this->id == 'create' && $this->secondAction == 'index') {
                // Create user
                $this->returnCustomView($this->model->create_user(), 'admin','create_user');
            } else if ($this->id == 'info' && $this->secondAction == 'index') {
                // Show created user information if it has been created
                if(isset($_SESSION['user_info'])){
                    $this->returnCustomView($this->model->user_info(), 'admin','user_info');
                } else {
                    header('Location:' . ROOT_URL . '/errors/404.php');
                }
            } else if ($this->secondAction == 'delete') {
                // Delete user if not itself
                if ($this->id != $_SESSION['user_id']) {
                    $this->model->delete_user($this->id);
                } else {
                    Functions::flash('error', 'No puede eliminar su usuario desde esta página');
                    header('Location:' . ROOT_URL . '/admin');
                }
            } else if ($this->secondAction == 'recover') {
                // Recover user if not itself
                if ($this->id != $_SESSION['user_id']) {
                    $this->model->recover_user($this->id);
                } else {
                    Functions::flash('error', 'No puede recuperar su usuario');
                    header('Location:' . ROOT_URL . '/admin');
                }
            } else if ($this->secondAction == 'approve') {
                // Approve user if not itself
                if ($this->id != $_SESSION['user_id']) {
                    $this->model->approve_user($this->id);
                } else {
                    Functions::flash('error', 'No puede aprobar su usuario');
                    header('Location:' . ROOT_URL . '/admin');
                }
            } else if ($this->secondAction == 'disapprove') {
                // Disapprove user if not itself
                if ($this->id != $_SESSION['user_id']) {
                    $this->model->disapprove_user($this->id);
                } else {
                    Functions::flash('error', 'No puede desaprobar su usuario');
                    header('Location:' . ROOT_URL . '/admin');
                }
            } else if ($this->secondAction == 'destroy') {
                // Permanently delete user if not itself
                if ($this->id != $_SESSION['user_id']) {
                    $this->model->destroy_user($this->id);
                } else {
                    Functions::flash('error', 'No puede eliminar su usuario desde esta página');
                    header('Location:' . ROOT_URL . '/admin');
                }
            }
        } else {
            header('Location:' . ROOT_URL . '/errors/403.php');
        }
    }

    /**
     * Call users method
     */
    protected function users()
    {
        $this->callModel();

        if ($this->user->is_admin()) {
            if ($this->id != 'trash') {
                $this->returnView($this->model->users(), 'main');
            } else {
                $this->returnCustomView($this->model->deleted_users(), 'admin', 'trash_users');
            }
        } else {
            header('Location:' . ROOT_URL . '/errors/403.php');
        }
    }
}