<?php
class Log extends Controller{
    /**
     * Call Log model
     */
    protected function index(){
        $view = new LogModel();
        $this->returnCustomView($view->index(), 'inventory', 'log');
    }

    /**
     * Call show action in Log model
     */
    protected function show(){
        $view = new LogModel();
        $this->returnCustomView($view->show($this->id), 'inventory', 'show');
    }

    /**
     * Call filter action in Log model
     */
    protected function filter(){
        $view = new LogModel();
        $this->returnCustomView($view->filter($this->id), 'inventory', 'log');
    }

    /**
     * Call reverse action in Log model
     */
    protected function reverse(){
        $view = new LogModel();
        $view->reverse($this->id);
    }
}