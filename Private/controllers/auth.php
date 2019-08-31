<?php
class Auth extends Controller
{
    /**
     * Call login method
     */
    protected function login()
    {
        $user = new Functions();
        // Destroy and start again session if user is logged and trying to access to login
        if ($user->is_logged()) {
            $messages = $_SESSION['message'];
            session_destroy();
            session_start();
            $_SESSION['message'] = $messages;
        }

        $view = new AuthModel();
        $this->returnView($view->login(), 'main');
    }

    /**
     * Call register method
     */
    protected function register()
    {
        if(USER_REGISTRATION){
            $view = new AuthModel();
            $this->returnView($view->register(), 'main');
        }else{
            header('Location:'.ROOT_URL.'/errors/404.php');
        }
    }

    /**
     * Call recover method
     */
    protected function recover()
    {
        if(USER_RECOVER){
            $view = new AuthModel();
            if(Functions::blank($this->id) && $this->secondAction == 'index'){
                $this->returnView($view->recover(), 'main');
            } else {
                $this->returnCustomView($view->pwd_change($this->id, $this->secondAction), 'auth', 'pwd-change');
            }
        }else{
            header('Location:'.ROOT_URL.'/errors/404.php');
        }
    }

    /**
     * Call verify method
     */
    protected function verify()
    {
            $view = new AuthModel();
            $view->verify($this->id, $this->secondAction);
    }

    /**
     * Call logout method
     */
    protected function logout()
    {
        $user = new Functions();
        $view = new AuthModel();
        $view->logout($this->id, $user->getUser());
    }
}