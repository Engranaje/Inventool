<?php
abstract class Session
{
    protected $session;
    protected $demo_id;
    protected $user_id;
    protected $name;
    protected $username;
    protected $role;
    protected $status;
    protected $auth;
    protected $user_token;
    protected $token;

    public function __construct($session = null)
    {
        if ($session == null) {
            $this->session = $_SESSION;
        } else {
            $this->session = $session;
        }

        // Check session demo id
        if (isset($this->session['demo_id']) && !empty($this->session['demo_id'])) {
            $this->demo_id = filter_var($this->session['demo_id'], FILTER_SANITIZE_STRING);

            // Don't allow an array on session
            if (gettype($this->demo_id) == 'array' && !is_string($this->demo_id)) {
                header('Location:' . ROOT_URL . '/404.php');
            }
        }

        // Check session user id
        if (isset($this->session['user_id']) && !empty($this->session['user_id'])) {
            $this->user_id = filter_var($this->session['user_id'], FILTER_SANITIZE_STRING);

            // Don't allow an array on session
            if (gettype($this->user_id) == 'array' && !is_string($this->user_id)) {
                header('Location:' . ROOT_URL . '/404.php');
            }
        }

        // Check session user name
        if (isset($this->session['name']) && !empty($this->session['name'])) {
            $this->name = filter_var($this->session['name'], FILTER_SANITIZE_STRING);

            // Don't allow an array on session
            if (gettype($this->name) == 'array' && !is_string($this->name)) {
                header('Location:' . ROOT_URL . '/404.php');
            }
        }

        // Check session user username
        if (isset($this->session['username']) && !empty($this->session['username'])) {
            $this->username = filter_var($this->session['username'], FILTER_SANITIZE_STRING);

            // Don't allow an array on session
            if (gettype($this->username) == 'array' && !is_string($this->username)) {
                header('Location:' . ROOT_URL . '/404.php');
            }
        }

        // Check session user role
        if (isset($this->session['role']) && !empty($this->session['role'])) {
            $this->role = filter_var($this->session['role'], FILTER_SANITIZE_STRING);

            // Don't allow an array on session
            if (gettype($this->role) == 'array' && !is_string($this->role)) {
                header('Location:' . ROOT_URL . '/404.php');
            }
        }

        // Check session user status
        if (isset($this->session['status']) && !empty($this->session['status'])) {
            $this->status = filter_var($this->session['status'], FILTER_SANITIZE_STRING);

            // Don't allow an array on session
            if (gettype($this->status) == 'array' && !is_string($this->status)) {
                header('Location:' . ROOT_URL . '/404.php');
            }
        }

        // Check session user authentication
        if (isset($this->session['auth']) && !empty($this->session['auth'])) {
            $this->auth = filter_var($this->session['auth'], FILTER_SANITIZE_STRING);

            // Don't allow an array on session
            if (gettype($this->auth) == 'array' && !is_string($this->auth)) {
                header('Location:' . ROOT_URL . '/404.php');
            }
        }

        // Set user token
        if (isset($this->session['user_token']) && !empty($this->session['user_token'])) {
            $this->user_token = filter_var($this->session['user_token'], FILTER_SANITIZE_STRING);

            // Don't allow an array on session
            if (gettype($this->user_token) == 'array' && !is_string($this->user_token)) {
                header('Location:' . ROOT_URL . '/404.php');
            }
        } else {
            $_SESSION['user_token'] = Functions::token();
            $this->user_token = $_SESSION['user_token'];
        }

        // Set form token
        if (isset($this->session['token']) && !empty($this->session['token'])) {
            $this->token = filter_var($this->session['token'], FILTER_SANITIZE_STRING);

            // Don't allow an array on session
            if (gettype($this->token) == 'array' && !is_string($this->token)) {
                header('Location:' . ROOT_URL . '/404.php');
            }
        } else {
            $_SESSION['token'] = Functions::token();
            $this->token = $_SESSION['token'];
        }
    }
}
