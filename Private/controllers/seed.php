<?php
class Seed extends Controller
{
    /**
     * Call database seed method
     */
    protected function index()
    {
        $view = new SeedModel();
        $view->index();
        header('Location:' . ROOT_URL . '/auth/login');
    }

    /**
     * Call admin creation seed method
     */
    protected function admin()
    {
        $view = new SeedModel();
        $view->admin();
        header('Location:' . ROOT_URL . '/auth/login');
    }
}
