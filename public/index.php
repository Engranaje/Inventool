<?php
/**
 * Change timezone to Dominica Republic.
 */
date_default_timezone_set('America/Santo_Domingo');
setlocale(LC_ALL, 'es_ES');

/*
 * Start session
 */
session_start();

/**
 * Global variables.
 */
require '../private/admin_user.php';
require '../private/config.php';

/** Language variables */
require PRIVATE_PATH.'/dist/lang/es.php';

/** Helper */
require PRIVATE_PATH.'/helpers/helper.php';

/**
 * Main clases.
 */
require PRIVATE_PATH.'/lib/bootstrap.php';
require PRIVATE_PATH.'/lib/controller.php';
require PRIVATE_PATH.'/lib/model.php';
require PRIVATE_PATH.'/lib/session.php';
require PRIVATE_PATH.'/lib/functions.php';

/**
 * Controller.
 */
require PRIVATE_PATH.'/controllers/seed.php';
require PRIVATE_PATH.'/controllers/admin.php';
require PRIVATE_PATH.'/controllers/login.php';
require PRIVATE_PATH.'/controllers/auth.php';
require PRIVATE_PATH.'/controllers/profile.php';
require PRIVATE_PATH.'/controllers/home.php';
require PRIVATE_PATH.'/controllers/new.php';
require PRIVATE_PATH.'/controllers/add.php';
require PRIVATE_PATH.'/controllers/remove.php';
require PRIVATE_PATH.'/controllers/log.php';
require PRIVATE_PATH.'/controllers/trash.php';
require PRIVATE_PATH.'/controllers/kit.php';

/**
 * Models.
 */
require PRIVATE_PATH.'/models/seed.php';
require PRIVATE_PATH.'/models/admin.php';
require PRIVATE_PATH.'/models/auth.php';
require PRIVATE_PATH.'/models/profile.php';
require PRIVATE_PATH.'/models/home.php';
require PRIVATE_PATH.'/models/new.php';
require PRIVATE_PATH.'/models/add.php';
require PRIVATE_PATH.'/models/remove.php';
require PRIVATE_PATH.'/models/log.php';
require PRIVATE_PATH.'/models/trash.php';
require PRIVATE_PATH.'/models/kit.php';

/*
 * Change alias of class NewController
 */
class_alias('NewController', 'New');

$bootstrap = new Bootstrap($_GET);
$controller = $bootstrap->createController();

if ($controller) {
    /*
     * Call action
     */
    $controller->executeAction();
}
