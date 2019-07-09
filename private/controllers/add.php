<?php
class Add extends Controller{
    /**
     * Call Add model
     */
    protected function index(){
        $view = new AddModel();
        $this->returnCustomView($view->index(), 'inventory', 'add');
    }

    /**
     * Call entry method in Add model
     */
    protected function entry(){
        $view = new AddModel();
        $view->entry();
    }
}