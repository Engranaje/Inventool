<?php
// Dump and die (Show as formatted JSON)
function dd($variable)
{
    header('Content-Type: application/json');
    echo json_encode($variable, JSON_PRETTY_PRINT);
    die();
}

// Get client address
function address()
{
    return $_SERVER['REMOTE_ADDR'];
}

/**
 * Generate salt.
 */
function salt()
{
    $random = md5(mt_rand(1000, 9999));
    $salt = $random.'@%InV-/.t001&##';

    return str_shuffle($salt);
}

/**
 * Form token.
 */
function token()
{
    $salt = salt();
    $id = uniqid(mt_rand(), true);
    $token = md5($salt.$id);

    return $token;
}

/**
 * Get actual timestamp.
 */
function now()
{
    return date('Y-m-d H:i:s');
}

/**
 * Get actual timestamp.
 */
function today()
{
    return date('Y-m-d');
}

/**
 * Friendly date.
 */
function friendlyDate($date)
{
    return strftime('%d %b %G', strtotime($date));
}

/**
 * Create a flash message.
 */
function flash($type, $message)
{
    if (!isset($_SESSION['message'][$type])) {
        $_SESSION['message'][$type] = $message;
    }
}

/**
 * Check if message isset.
 */
function has_message($type)
{
    if (gettype($type) == 'array') {
        foreach ($type as $value) {
            if (isset($_SESSION['message'][$value])) {
                return true;
            }
        }
    } else {
        if (isset($_SESSION['message'][$type])) {
            return true;
        }
    }

    return false;
}

/**
 * Read flash messages.
 */
function message($type)
{
    $messages = null;

    if (gettype($type) == 'array') {
        foreach ($type as $value) {
            if (isset($_SESSION['message'][$value])) {
                $messages = $_SESSION['message'][$value];
                unset($_SESSION['message'][$value]);

                return $messages;
            }
        }
    } else {
        if (isset($_SESSION['message'][$type])) {
            $messages = $_SESSION['message'][$type];
            unset($_SESSION['message'][$type]);

            return $messages;
        }
    }

    return $messages;
}

/**
 * Unset flash message.
 */
function unset_flash($type)
{
    if (gettype($type) == 'array') {
        foreach ($type as $value) {
            if (isset($_SESSION['message'][$value])) {
                unset($_SESSION['message'][$value]);
            }
        }
    } else {
        if (isset($_SESSION['message'][$type])) {
            unset($_SESSION['message'][$type]);
        }
    }

    return;
}

/** Filters for sanitize */
function search_filters($option)
{
    $value = '';

    switch (strtolower($option)) {
        case 'string':
            $value = FILTER_SANITIZE_STRING;
            break;
        case 'int':
            $value = FILTER_SANITIZE_NUMBER_INT;
            break;
        case 'float':
            $value = FILTER_SANITIZE_NUMBER_FLOAT;
            break;
        case 'email':
            $value = FILTER_SANITIZE_EMAIL;
            break;
        case 'encoded':
            $value = FILTER_SANITIZE_ENCODED;
            break;
        case 'full':
        case 'full-chars':
            $value = FILTER_SANITIZE_FULL_SPECIAL_CHARS;
            break;
        case 'special':
        case 'chars':
            $value = FILTER_SANITIZE_SPECIAL_CHARS;
            break;
        case 'magic':
        case 'quotes':
            $value = FILTER_SANITIZE_MAGIC_QUOTES;
            break;
        case 'stripped':
            $value = FILTER_SANITIZE_STRIPPED;
            break;
        case 'url':
            $value = FILTER_SANITIZE_URL;
            break;
        default:
            $value = FILTER_SANITIZE_STRING;
            break;
    }

    return $value;
}

/**
 * Check if data in not empty.
 */
function blank($array)
{
    if (gettype($array) == 'array') {
        foreach ($array as $value) {
            if (trim($value) == '' || empty(trim($value)) || is_null($value)) {
                return true;
            }
        }
    } else {
        if (trim($array) == '' || empty(trim($array)) || is_null($array)) {
            return true;
        }
    }

    return false;
}

/** Retrieve form data */
function form_data(array $array)
{
    $data = [];

    foreach ($array as $key => $value) {
        if (gettype($value) == 'array') {
            foreach ($value as $other_key => $other_value) {
                if ($other_key == 'array') {
                    if (isset($_POST[$other_value]) && !empty($_POST[$other_value])) {
                        $data[$other_value] = filter_var_array($_POST[$other_value], FILTER_SANITIZE_STRING);
                    } else {
                        $data[$other_value] = '';
                        flash($other_value, 'El campo '.$_ENV[$other_value].' es requerido.');
                    }
                } elseif ($other_value == 'email') {
                    $salt = salt();
                    if (isset($_POST[$other_value]) && !empty($_POST[$other_value])) {
                        $email = filter_var($_POST[$other_value], FILTER_SANITIZE_EMAIL);
                        $email_pattern = "^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$^";

                        if (!preg_match($email_pattern, $email)) {
                            flash($other_value, 'El formato del correo es incorrecto.');
                        } else {
                            $hash = md5($salt.mt_rand(0, 1000));
                        }

                        $data[$other_value] = $email;
                        $data['hash'] = $hash;
                    } else {
                        $data[$other_value] = '';
                        flash($other_value, 'El campo '.$_ENV[$other_value].' es requerido.');
                    }
                } elseif ($other_value == 'password' || $other_key == 'password') {
                    if (isset($_POST[$other_value]) && !empty($_POST[$other_value])) {
                        $password = $_POST[$other_value];
                        $options = [
                            'cost' => 12,
                        ];
                        // Validate that password has at least 4 characters
                        if (strlen($password) < 4) {
                            flash($other_value, 'La contraseña debe de tener al menos 4 caracteres.');
                        }
                        $password_hashed = password_hash($password, PASSWORD_BCRYPT, $options);
                        $data[$other_value] = $password;
                        $data[$other_value.'_hashed'] = $password_hashed;
                    } else {
                        $data[$other_value] = '';
                        flash($other_value, 'El campo '.$_ENV[$other_value].' es requerido.');
                    }
                } else {
                    if (isset($_POST[$other_value]) && !empty($_POST[$other_value])) {
                        $data[$other_value] = filter_var($_POST[$other_value], search_filters($other_key));
                    } else {
                        $data[$other_value] = '';
                        flash($other_value, 'El campo '.$_ENV[$other_value].' es requerido.');
                    }
                }
            }
        } else {
            if ($value == 'email') {
                $salt = salt();
                if (isset($_POST[$value]) && !empty($_POST[$value])) {
                    $email = filter_var($_POST[$value], FILTER_SANITIZE_EMAIL);
                    $email_pattern = "^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$^";
                    $hash = '';

                    if (!preg_match($email_pattern, $email)) {
                        flash($value, 'El formato del correo es incorrecto.');
                    } else {
                        $hash = md5($salt.mt_rand(0, 1000));
                    }

                    $data[$value] = $email;
                    $data['hash'] = $hash;
                } else {
                    $data[$value] = '';
                    flash($value, 'El campo '.$_ENV[$value].' es requerido.');
                }
            } elseif ($value == 'password') {
                if (isset($_POST[$value]) && !empty($_POST[$value])) {
                    $password = $_POST[$value];
                    $options = [
                        'cost' => 12,
                    ];

                    // Validate that password has at least 4 characters
                    if (strlen($password) < 4) {
                        flash($value, 'La contraseña debe de tener al menos 4 caracteres.');
                    }

                    $password_hashed = password_hash($password, PASSWORD_BCRYPT, $options);
                    $data[$value] = $password;
                    $data['password_hashed'] = $password_hashed;
                } else {
                    $data[$value] = '';
                    flash($value, 'El campo '.$_ENV[$value].' es requerido.');
                }
            } else {
                if (isset($_POST[$value]) && !empty($_POST[$value])) {
                    $data[$value] = filter_var($_POST[$value], FILTER_SANITIZE_STRING);
                } else {
                    $data[$value] = '';
                    flash($value, 'El campo '.$_ENV[$value].' es requerido.');
                }
            }
        }
    }

    return $data;
}

/** Confirm password */
function confirm_password($password, $password_confirm, $password_var, $password_confirm_var)
{
    if (isset($password)) {
        // Delete password flash message if it's blank
        if (blank($password)) {
            unset_flash($password_var);
        }
        // Delete confirm  password flash message if it's blank
        if (blank($password_confirm)) {
            unset_flash($password_confirm_var);
        }

        // Set flash message to confirm  password
        if ($password != $password_confirm) {
            flash($password_confirm_var, 'La contraseña no coincide con la confirmación.');
        }
    }
}

/**
 * Check if form validations are right.
 */
function form_success($session_token, $post_token, $error_message, $token_age = false, $token_message = null, $submitted = false)
{
    $is_valid = false;

    // Check if session token and post token are set
    if (isset($session_token) &&
                isset($post_token) &&
                !empty($session_token) &&
                !empty($post_token)) {
        // Check if post token and session token are equal
        if ($post_token == $session_token) {
            $is_valid = true;
        }
    } else {
        flash('error', $error_message);
    }

    // If form is valid, then continue
    if ($is_valid) {
        // If token age is set, then proceed here
        if ($token_age) {
            // Set token age to determine if user submitted form too quickly or to late
            $tokenAge = time() - $_SESSION['token_time'];

            // Only continue if time passed in form is greater than 1 seconds and less than 5 minutes
            if ($tokenAge > 1 && $tokenAge < 250) {
                $is_valid = true;
            } else {
                $is_valid = false;
            }
        } else {
            flash('error', $token_message);
        }

        // If form submitted is set, then proceed here
        if ($submitted) {
            if ($_SESSION['submitted'] == false) {
                $_SESSION['submitted'] == true;
            }
        }
    }

    return $is_valid;
}

// Check if a user is active
function isActive(array $user)
{
    if ($user['status'] == '1') {
        return true;
    }

    return false;
}

// Logout
function logout()
{
    $session = new Functions();
    header('location:'.ROOT_URL.'/auth/logout/'.$session->getUserToken());
}