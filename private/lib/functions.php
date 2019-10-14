<?php

class Functions extends Session
{
    /** User and session */
    // Check if user is admin
    public function is_admin()
    {
        if (strtolower($this->role) == ADMIN_ROLE) {
            return true;
        }

        return false;
    }

    // Check if user is admin
    public function is_authorized()
    {
        if ($this->is_admin() || strtolower($this->role) == MANAGER_ROLE) {
            return true;
        }

        return false;
    }

    // Check if session user is active
    public function is_active()
    {
        if ($this->status == '1') {
            return true;
        }

        return false;
    }

    // Check if there's a user with an active session
    public function is_logged()
    {
        if (isset($this->username) && $this->auth == true) {
            return $this->auth;
        }

        return false;
    }

    // Redirect to login
    public function require_auth()
    {
        if (!$this->is_logged()) {
            header('Location: '.ROOT_URL.'/auth/login');
            exit();
        }
    }

    /**
     * Get data.
     */
    public function getDemoId()
    {
        return $this->demo_id;
    }

    public function getUserId()
    {
        return $this->user_id;
    }

    public function getName()
    {
        return $this->name;
    }

    public function getUser()
    {
        return $this->username;
    }

    public function getRole()
    {
        return $this->role;
    }

    public function getUserToken()
    {
        return $this->user_token;
    }

    public function getToken()
    {
        return $this->token;
    }
}
