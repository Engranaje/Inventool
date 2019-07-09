<?php
abstract class Session
{
    protected $session;
    protected $token;

    public function __construct($session = null)
    {
        if ($session == null) {
            $this->session = $_SESSION;
        } else {
            $this->session = $session;
        }

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
