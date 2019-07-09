<?php
class Remove extends Controller{
    /**
     * Call Remove model
     */
    protected function index(){
        $view = new RemoveModel();
        $this->returnCustomView($view->index(), 'inventory', 'remove');
    }

    /**
     * Call entry method in Remove model
     */
    protected function entry(){
        $view = new RemoveModel();
        $view->entry();
    }
}