<?php
class Functions extends Session
{
    /**
     * Generate salt
     */
    public static function salt()
    {
        $random = md5(mt_rand(1000, 9999));
        $salt = $random . '@%InV-/.t001&##';
        return str_shuffle($salt);
    }

    /**
     * Form token
     */
    public static function token()
    {
        $salt = Functions::salt();
        $id = uniqid(mt_rand(), true);
        $token = md5($salt . $id);
        return $token;
    }

    /**
     * Get actual timestamp
     */
    public static function now()
    {
        return date('Y-m-d\TH:i');
    }

    /**
     * Create a flash message
     */
    public static function flash($type, $message)
    {
        if (!isset($_SESSION['message'][$type])) {
            $_SESSION['message'][$type] = $message;
        }
    }

    /**
     * Check if message isset
     */
    public function hasMessage($type)
    {
        if (isset($_SESSION['message'][$type])) {
            $message = $_SESSION['message'][$type];
            return $message;
        }

        return null;
    }

    /**
     * Read flash message
     */
    public function message($type)
    {
        if (isset($_SESSION['message'][$type])) {
            $message = $_SESSION['message'][$type];
            unset($_SESSION['message'][$type]);
            return $message;
        }

        return null;
    }

    /**
     * Get token
     */
    public function getToken()
    {
        return $this->token;
    }
}
