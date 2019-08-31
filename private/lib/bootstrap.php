<?php
class Bootstrap
{
    private $request;
    private $controller;
    private $id;
    private $action;
    private $secondAction;

    public function __construct($request)
    {
        $this->request = $request;

        if ($this->request['controller'] == '') {
            /**
             * If the specific controller isn't found,
             * then set controller as Home, which is the main controller
             */
            $this->controller = 'home';
        } else {
            if (gettype($this->request['controller']) == 'array') {
                header('Location:' . ROOT_URL . '/404.php');
            }

            $this->controller = $this->request['controller'];
        }

        if ($this->request['action'] == '') {
            /**
             * If a specific action is no set,
             * then call index method
             * otherwise, call the intended action
             */
            $this->action = 'index';
        } else {
            if (gettype($this->request['action']) == 'array') {
                header('Location:' . ROOT_URL . '/404.php');
            }

            $this->action = $this->request['action'];
        }

        if ($this->request['id'] == '') {
            /**
             * If no ID is entered, set it as blank.
             * This also executes an action if the base action (file) is inside another folder,
             */
            $this->id = '';
        } else {
            if (gettype($this->request['id']) == 'array') {
                header('Location:' . ROOT_URL . '/404.php');
            }

            $this->id = $this->request['id'];
        }

        if ($this->request['secondAction'] == '') {
            /**
             * If second action is not set,
             * which happens if no ID is entered,
             * then call index as second action.
             */
            $this->secondAction = 'index';
        } else {
            if (gettype($this->request['secondAction']) == 'array') {
                header('Location:' . ROOT_URL . '/404.php');
            }

            $this->secondAction = $this->request['secondAction'];
        }
    }

    public function createController()
    {
        if (class_exists($this->controller)) {
            $parents = class_parents($this->controller);

            if (in_array('Controller', $parents)) {
                if (method_exists($this->controller, $this->action)) {
                    return new $this->controller($this->action, $this->secondAction, $this->id, $this->request);
                } else {
                    header('Location:' . ROOT_URL . '/404.php');
                }
            } else {
                header('Location:' . ROOT_URL . '/404.php');
            }
        } else {
            header('Location:' . ROOT_URL . '/404.php');
        }
    }
}
