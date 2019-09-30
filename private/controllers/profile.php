<?php
class Profile extends Controller
{
    /**
     * Call of index method
     */
    protected function index()
    {
        $user = new Functions();

        $view = new ProfileModel();
        $this->returnView($view->index($user->getUserId()), 'main');
    }

    /**
     * Call of update method
     */
    protected function update()
    {
        $user = new Functions();

        if ($this->id == $user->getUserId()) {
            $view = new ProfileModel();
            $view->update($user->getUserId());
        } else {
            header('Location:' . ROOT_URL . '/errors/403.php');
        }
    }

    /**
     * Call of delete method
     */
    protected function delete()
    {
        $user = new Functions();

        if ($this->id == $user->getUserId()) {
            $view = new ProfileModel();
            $view->delete($user->getUserId());
        } else {
            header('Location:' . ROOT_URL . '/errors/403.php');
        }
    }
}
