<?php
class Admin extends Controller
{
    protected $model;
    protected $user;

    /**
     * Function to call model
     */
    protected function callModel()
    {
        $this->user = new Functions();
        $this->model = new AdminModel();
    }

    /** Function to verify if user is admin */
    protected function verifyAdmin()
    {
        if (!$this->user->is_admin()) {
            header('Location:' . ROOT_URL . '/errors/403.php');
            return;
        }
    }

    /**
     * Show administration page
     */
    protected function index()
    {
        // Call admin model
        $this->callModel();

        // Verify that user is admin
        $this->verifyAdmin();

        $this->returnView(null, 'main');
    }

    /**
     * Call user actions
     */
    protected function user()
    {
        // Call admin model
        $this->callModel();

        // Verify that user is admin
        $this->verifyAdmin();

        if ($this->secondAction == 'edit') {
            // Edit user
            $this->returnView($this->model->edit_user($this->id), 'main');
        } else if ($this->secondAction == 'update') {
            // Update user if not itself
            if ($this->id != $_SESSION['user_id']) {
                $this->model->update_user($this->id);
            } else {
                flash('error', 'No puede actualizar su usuario desde esta página');
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
                flash('error', 'No puede eliminar su usuario desde esta página');
                header('Location:' . ROOT_URL . '/admin');
            }
        } else if ($this->secondAction == 'recover') {
            // Recover user if not itself
            if ($this->id != $_SESSION['user_id']) {
                $this->model->recover_user($this->id);
            } else {
                flash('error', 'No puede recuperar su usuario');
                header('Location:' . ROOT_URL . '/admin');
            }
        } else if ($this->secondAction == 'approve') {
            // Approve user if not itself
            if ($this->id != $_SESSION['user_id']) {
                $this->model->approve_user($this->id);
            } else {
                flash('error', 'No puede aprobar su usuario');
                header('Location:' . ROOT_URL . '/admin');
            }
        } else if ($this->secondAction == 'disapprove') {
            // Disapprove user if not itself
            if ($this->id != $_SESSION['user_id']) {
                $this->model->disapprove_user($this->id);
            } else {
                flash('error', 'No puede desaprobar su usuario');
                header('Location:' . ROOT_URL . '/admin');
            }
        } else if ($this->secondAction == 'destroy') {
            // Permanently delete user if not itself
            if ($this->id != $_SESSION['user_id']) {
                $this->model->destroy_user($this->id);
            } else {
                flash('error', 'No puede eliminar su usuario desde esta página');
                header('Location:' . ROOT_URL . '/admin');
            }
        }
    }

    /**
     * Call users method
     */
    protected function users()
    {
        // Call admin model
        $this->callModel();

        // Verify that user is admin
        $this->verifyAdmin();

        if ($this->id != 'trash') {
            $this->returnView($this->model->users(), 'main');
        } else {
            $this->returnCustomView($this->model->deleted_users(), 'admin', 'trash_users');
        }
    }

    /**
     * Call notifications method
     */
    protected function notifications()
    {
        // Call admin model
        $this->callModel();

        // Verify that user is admin
        $this->verifyAdmin();

        if ($this->id != 'notify' && $this->secondAction != 'unnotify') {
            $this->returnView($this->model->notifications(), 'main');
        } else {
            if($this->secondAction == 'unnotify'){
                $this->model->unnotify($this->id);
            }else{
                $this->model->notify();
            }
        }
    }

    /**
     * Call hide notifications method
     */
    protected function hide_notifications()
    {
        // Call admin model
        $this->callModel();

        $this->model->hide_notifications();
    }
}
