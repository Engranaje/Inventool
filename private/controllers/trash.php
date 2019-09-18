<?php
class Trash extends Controller{
    /**
     * Call Trash model
     */
    protected function index(){
        $user = new Functions();

        if($user->is_admin()){
            $view = new TrashModel();
            $this->returnCustomView($view->index(), 'inventory', 'trash');
        } else {
            header('Location:'.ROOT_URL.'/errors/403.php');
        }
    }

    /**
     * Call recover method in Trash model
     */
    protected function recover(){
        $view = new TrashModel();
        $view->recover();
    }

    /**
     * Call delete method in Trash model
     */
    protected function delete(){
        $view = new TrashModel();
        $view->delete();
    }
}