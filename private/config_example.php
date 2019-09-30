<?php
/**
 * Database configuration
 */
if (!defined('DB_HOST')) {
    define('DB_HOST', 'localhost');
}
if (!defined('DB_USER')) {
    define('DB_USER', 'root');
}
if (!defined('DB_PASS')) {
    define('DB_PASS', '');
}
if (!defined('DB_NAME')) {
    define('DB_NAME', 'inv_tooldb');
}

/**
 * URL
 * */
 
// The application root URL
if (!defined('ROOT_URL')) {
    define('ROOT_URL', 'http://inventool.test');
}
// The path to the private folder, parting from the public path
if (!defined('PRIVATE_PATH')) {
    define('PRIVATE_PATH', '../private');
}

/**
 * Configuration for user registration and email system
 * */
// If true, user registration will be allowed
if (!defined('USER_REGISTRATION')) {
    define('USER_REGISTRATION', true);
}
// If true, user password recovery will be allowed
if (!defined('USER_RECOVER')) {
    define('USER_RECOVER', true);
}
// If true, administrator will be allowed to change users password
if (!defined('PASSWORD_CHANGE')) {
    define('PASSWORD_CHANGE', true);
}
// Email host configuration
if (!defined('EMAIL_HOST')) {
    define('EMAIL_HOST', 'smtp.gmail.com');
}
// The email to which registration messages will be sent, and which will send password recovery messages
if (!defined('FROM_EMAIL')) {
    define('FROM_EMAIL', 'your-email@gmail.com');
}
// The email password
if (!defined('EMAIL_PASS')) {
    define('EMAIL_PASS', 'your-email-password');
}

/**
 * Configuration for demo
 */
if (!defined('DEMO_MODE')) {
    define('DEMO_MODE', false);
}

/**
 * Other constants
 * */

// Administrator role
if (!defined('ADMIN_ROLE')) {
    define('ADMIN_ROLE', 'administrador');
}

// Manager role
if (!defined('MANAGER_ROLE')) {
    define('MANAGER_ROLE', 'gerente');
}
