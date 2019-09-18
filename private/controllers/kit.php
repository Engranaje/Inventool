<?php
class Kit extends Controller{
    /**
     * Call Add model
     */
    protected function edit(){
        $view = new KitModel();
        $this->returnCustomView($view->edit($this->id), 'inventory', 'kitEdit');
    }

    /**
     * Call create action in Add model
     */
    protected function update(){
        $view = new KitModel();
        $view->update($this->id);
    }
}