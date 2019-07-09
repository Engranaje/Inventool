<?php
/**
 * Change timezone to Dominica Republic
 */
date_default_timezone_set('America/Santo_Domingo');
setLocale(LC_ALL,"es_ES");

/**
 * Start session
 */
session_start();

/**
 * Global variables
 */
require '../private/config.php';

/**
 * Main clases
 */
require PRIVATE_PATH . '/lib/bootstrap.php';
require PRIVATE_PATH . '/lib/controller.php';
require PRIVATE_PATH . '/lib/model.php';
require PRIVATE_PATH . '/lib/session.php';
require PRIVATE_PATH . '/lib/functions.php';

/**
 * Controller
 */
require PRIVATE_PATH . '/controllers/home.php';
require PRIVATE_PATH . '/controllers/new.php';
require PRIVATE_PATH . '/controllers/add.php';
require PRIVATE_PATH . '/controllers/remove.php';
require PRIVATE_PATH . '/controllers/log.php';
require PRIVATE_PATH . '/controllers/trash.php';

/**
 * Models
 */
require PRIVATE_PATH . '/models/home.php';
require PRIVATE_PATH . '/models/new.php';
require PRIVATE_PATH . '/models/add.php';
require PRIVATE_PATH . '/models/remove.php';
require PRIVATE_PATH . '/models/log.php';
require PRIVATE_PATH . '/models/trash.php';

/**
 * Change alias of class NewController
 */
class_alias('NewController', 'New');

$bootstrap = new Bootstrap($_GET);
$controller = $bootstrap->createController();

if($controller){
    /**
     * Call action
     */
    $controller->executeAction();
}