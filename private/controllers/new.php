<?php
class NewController extends Controller{
    /**
     * Call Add model
     */
    protected function index(){
        $view = new NewModel();
        $this->returnCustomView($view->index(), 'inventory', 'new');
    }

    /**
     * Call create action in Add model
     */
    protected function create(){
        $view = new NewModel();
        $view->create();
    }
}