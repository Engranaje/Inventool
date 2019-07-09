<?php
class Trash extends Controller{
    /**
     * Call Trash model
     */
    protected function index(){
        $view = new TrashModel();
        $this->returnCustomView($view->index(), 'inventory', 'trash');
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