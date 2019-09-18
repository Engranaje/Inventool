<?php
abstract class Controller{
    protected $request;
    protected $action;
    protected $id;
    protected $secondAction;

    /**
     * Assign URL variables
     */
    public function __construct($action, $secondAction, $id, $request){
        $this->action = $action;
        $this->secondAction = $secondAction;
        $this->id = $id;
        $this->request = $request;
    }

    /**
     * Execute base controller's action
     */
    public function executeAction(){
        return $this->{$this->action}();
    }

    /**
     * Execute second action, which can modify a specific record
     */
    public function executeSecondAction(){
        return $this->{$this->secondAction}();
    }

    /**
     * Execute an action of a file located inside another folder inside root folder
     */
    public function executeIdAction(){
        return $this->{$this->id}();
    }

    /**
     * Show main pages
     */
    protected function returnView($viewmodel, $fullview){
        $view = PRIVATE_PATH . '/views/'.strtolower(get_class($this)).'/'.$this->action.'.php';

        if($fullview !== ''){
            require(PRIVATE_PATH . '/views/layouts/main.php');
        }else{
            require($view);
        }
    }

    /**
     * Show custom pages
     */
    protected function returnCustomView($viewmodel, $fullview, $action){
        $view = PRIVATE_PATH . '/views/'.$fullview.'/'.$action.'.php';

        if($fullview !== ''){
            require(PRIVATE_PATH . '/views/layouts/main.php');
        }else{
            require($view);
        }
    }
}