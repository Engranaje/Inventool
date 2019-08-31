<?php
class Home extends Controller
{
    /**
     * Call Home model
     */
    protected function index()
    {
        $user = new Functions();
        if($user->is_logged()){
            $view = new HomeModel();
            $this->returnView($view->index(), 'main');
        }else{
            header('Location:'.ROOT_URL.'/auth/login');
        }
    }

    /**
     * Call update records action in Home model
     */
    protected function update()
    {
        $view = new HomeModel();
        $view->update();
    }

    /**
     * Call delete records action in Home model
     */
    protected function delete()
    {
        $view = new HomeModel();
        $view->delete();
    }
}
