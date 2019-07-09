<?php
class Home extends Controller{
    /**
     * Call Home model
     */
    protected function index(){
        $view = new HomeModel();
        $this->returnView($view->index(), 'main');
    }

    /**
     * Call update records action in Home model
     */
    protected function update(){
        $view = new HomeModel();
        $view->update();
    }

    /**
     * Call delete records action in Home model
     */
    protected function delete(){
        $view = new HomeModel();
        $view->delete();
    }
}