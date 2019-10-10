<?php
class NewController extends Controller{
    /**
     * Call Add model
     */
    protected function index(){
        $view = new NewModel();$user = new Functions();
        if($user->is_logged()){
            $view = new HomeModel();
            // $this->returnView($view->index(), 'main');
            $this->returnCustomView($view->index(), 'home', 'index');
        }else{
            header('Location:'.ROOT_URL.'/auth/login');
        }
    }

    /**
     * Call create action in Add model
     */
    protected function create(){
        $view = new NewModel();
        $view->create();
    }
}