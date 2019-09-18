<?php
class Login extends Controller
{
    /**
     * Redirect login
     */
    protected function index()
    {
        header('Location:' . ROOT_URL . '/auth/login');
    }
}
