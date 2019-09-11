<?php

// Call PHPMailer
use PHPMailer\PHPMailer\PHPMailer;

class AuthModel extends Model
{
    /**
     * Login.
     */
    public function login()
    {
        $error_message = 'No se pudo iniciar sesión. <br /> Por favor, intente de nuevo o contacte con el administrador.';

        if (!isset($_POST['token']) || !isset($_SESSION['token'])) {
            return;
        }

        if (Functions::form_success($_SESSION['token'], $_POST['token'], $error_message)) {
            // Form data
            $data = Functions::form_data(['username', 'password']);

            try {
                $this->query('SELECT users.id AS user_id, users.name AS user_name, username, password, users.hash, roles.name AS role, status FROM users
                        JOIN roles
                            ON roles.id = users.role_id
                        WHERE username = :username');
                $this->bind(':username', $data['username']);
                $user = $this->singleRow();

                if ($user) {
                    // If user is not active, return
                    if (!Functions::isActive($user) || !Functions::blank($user['hash'])) {
                        Functions::flash('error', 'Su usuario aún no ha sido activado. <br /> Contacte con el administrador.');

                        return;
                    }

                    // Verify password
                    if (password_verify($data['password'], $user['password'])) {
                        // Start session
                        $_SESSION['user_id'] = $user['user_id'];
                        $_SESSION['name'] = $user['user_name'];
                        $_SESSION['username'] = $user['username'];
                        $_SESSION['role'] = $user['role'];
                        $_SESSION['status'] = $user['status'];
                        $_SESSION['auth'] = true;
                        $_SESSION['user_token'] = Functions::token();

                        $this->query('UPDATE users SET login = :login, logout = :logout WHERE username = :username');
                        $this->bind(':login', Functions::now());
                        $this->bind(':logout', null);
                        $this->bind(':username', $data['username']);
                        $this->execute();

                        header('Location:'.ROOT_URL);
                    } else {
                        Functions::flash('error', 'El usuario y/o la contraseña son incorrectos.');
                    }
                } else {
                    Functions::flash('error', 'El usuario no existe');
                }
            } catch (\Exception $e) {
                Functions::flash('error', $error_message);
            }
        }

        return;
    }

    /**
     * Logout.
     */
    public function logout($token, $username)
    {
        if (isset($_SESSION['user_token'])) {
            if ($_SESSION['user_token'] == $token) {
                session_destroy();

                $this->query('UPDATE users SET login = :login, logout = :logout WHERE username = :username');
                $this->bind(':login', null);
                $this->bind(':logout', Functions::now());
                $this->bind(':username', $username);
                $this->execute();

                header('Location:'.ROOT_URL.'/auth/login');
            } else {
                Functions::flash('error', 'No puede entrar directamente a esta dirección');
                header('Location:'.ROOT_URL);
            }
        } else {
            Functions::flash('error', 'No puede entrar directamente a esta dirección');
            header('Location:'.ROOT_URL);
        }
    }

    /**
     * Register.
     */
    public function register()
    {
        if (!isset($_POST['token'])) {
            return;
        }

        $error_message = 'No se pudo registrar el usuario. <br /> Por favor, intente de nuevo.';
        $token_message = 'Se ha agotado el tiempo de espera o lo ha intentado demasiado rápido. <br /> Por favor, recargue e intente de nuevo.';

        if (Functions::form_success($_SESSION['token'], $_POST['token'], $error_message, true, $token_message, true)) {
            // Clase para capturar excepciones
            include ROOT_PATH.'PHPMailer\src\Exception.php';

            // Clase principal de PHPMailer
            include ROOT_PATH.'PHPMailer\src\PHPMailer.php';

            // Clase para el servidor SMTP
            include ROOT_PATH.'PHPMailer\src\SMTP.php';

            require ROOT_PATH.'vendor/autoload.php';

            /**
             * Form data.
             */
            $data = Functions::form_data([
                'name',
                'username',
                'email',
                'password',
                'confirm_password',
            ]);

            // Confirm password if it's set
            Functions::confirm_password($data['password'], $data['confirm_password'], 'password', 'confirm_password');

            if (Functions::has_message(array_keys($data))) {
                return $data;
            }

            // Initialize PHPMailer
            $mail = new PHPMailer(true);

            try {
                $this->query('INSERT INTO users (name, username, email, password, role_id, hash) VALUES (:name, :username, :email, :password, :role_id, :hash)');
                $this->bind(':name', $data['name']);
                $this->bind(':username', $data['username']);
                $this->bind(':email', $data['email']);
                $this->bind(':password', $data['password_hashed']);
                $this->bind(':role_id', '3');
                $this->bind(':hash', $data['hash']);
                $this->execute();

                if ($this->lastInsertId() > 0) {
                    Functions::flash('success', 'Se ha registrado correctamente. <br /> Debe esperar a que el administrador apruebe su registro para poder iniciar sesión.');
                } else {
                    Functions::flash('error', 'El nombre de usuario o el correo ya están en uso.');

                    return $data;
                }

                /* Declare From email */
                $mail->setFrom(FROM_EMAIL, utf8_decode('Inventool'));

                /* Declare To email */
                $mail->addAddress(FROM_EMAIL);

                /* Declare Subject */
                $mail->Subject = utf8_decode('Inventool - registro de usuario');

                /* Send email as HTML */
                $mail->isHTML(true);

                // Email Body
                $body = "<html>
                                <head>
                                    <style>
                                        .header{
                                            color: #2C79B9;
                                            font-weight: bold;
                                            font-size: 20px;
                                        }
                                        .paragraph{font-size: 16px;}
                                        .btn{
                                            text-align: center;
                                            background-color: #007bff;
                                            color: #fbfef9 !important;
                                            font-weight: bold;
                                            text-decoration: none;
                                            border: 1px solid transparent;
                                            padding: .375rem .75rem;
                                            font-size: 1rem;
                                            line-height: 1.5;
                                            border-radius: .25rem;
                                            transition: color .15s ease-in-out,background-color .15s ease-in-out,                   border-color .15s ease-in-out,box-shadow .15s ease-in-out;
                                        }
                                        .btn:hover{
                                            background-color: #0069d9;
                                            border-color: #0062cc;
                                            text-decoration: none;
                                        }
                                        .font-bold{ font-weight: bold }
                                    </style>
                                </head>
                                <body>
                                    <p class='header'>Registro de usuario</p>
                                    <p class='paragraph'><span class='font-bold'>Nombre:</span> {$data['name']}</p>
                                    <p class='paragraph'><span class='font-bold'>Usuario:</span> {$data['username']}</p>
                                    <p class='paragraph'><span class='font-bold'>Correo:</span> {$data['email']}</p>

                                    <p class='paragraph'>Si debea aprobar este registro, haga clic en el siguiente enlace.</p>

                                    <a href='".ROOT_URL."/auth/verify/{$data['hash']}/{$data['username']}' class='btn'>Registrar</a>
                                </body>
                            </html>
                                ";

                $mail->Body = utf8_decode($body);

                /* SMTP parameters */
                $mail->isSMTP();

                /* SMTP server */
                $mail->Host = EMAIL_HOST;

                /* SMTP authentication */
                $mail->SMTPAuth = true;

                $mail->SMTPSecure = 'tls';
                // $mail->ENCRYPTION = "none";

                /* From email */
                $mail->Username = FROM_EMAIL;

                /* Email password */
                $mail->Password = EMAIL_PASS;

                /* SMTP server port */
                $mail->Port = 587;

                /* Send email */
                if (!$mail->send()) {
                    Functions::flash('error', 'Hubo un error tratando de registrarlo. <br /> Por favor, intente de nuevo o comuníquese con el administrador.');
                }
            } catch (Exception $e) {
                Functions::flash('error', 'El nombre de usuario o el correo ya está en uso');

                return $data;
            }

            header('Location:'.ROOT_URL.'/auth/login');
        }

        return;
    }

    /**
     * Send password recovery email.
     */
    public function recover()
    {
        if (!isset($_POST['token'])) {
            return;
        }

        $error_message = 'No se pudo enviar el correo de recuperación. <br /> Por favor, intente de nuevo.';
        $token_message = 'Se ha agotado el tiempo de espera. <br /> Por favor, recargue e intente de nuevo.';

        if (Functions::form_success($_SESSION['token'], $_POST['token'], $error_message, true, $token_message, true)) {
            // Clase para capturar excepciones
            include ROOT_PATH.'PHPMailer\src\Exception.php';

            // Clase principal de PHPMailer
            include ROOT_PATH.'PHPMailer\src\PHPMailer.php';

            // Clase para el servidor SMTP
            include ROOT_PATH.'PHPMailer\src\SMTP.php';

            require ROOT_PATH.'vendor/autoload.php';

            /**
             * Form data.
             */
            $data = Functions::form_data(['email']);

            if (Functions::has_message(array_keys($data))) {
                return $data;
            }

            // Initialize PHPMailer
            $mail = new PHPMailer(true);

            try {
                $this->query('SELECT username, email FROM users WHERE email = :email');
                $this->bind(':email', $data['email']);
                $user = $this->singleRow();

                if (!$user) {
                    Functions::flash('error', 'No hay un usuario registrado con este correo');

                    return;
                }

                $this->query('UPDATE users SET hash = :hash WHERE email = :email');
                $this->bind(':hash', $data['hash']);
                $this->bind(':email', $data['email']);
                $this->execute();

                /* Declare From email */
                $mail->setFrom(FROM_EMAIL, utf8_decode('Inventool'));

                /* Declare To email */
                $mail->addAddress($user['email']);

                /* Declare Subject */
                $mail->Subject = utf8_decode('Inventool - recuperar contraseña');

                /* Send email as HTML */
                $mail->isHTML(true);

                // Email Body
                $body = "<html>
                                <head>
                                    <style>
                                        .header{
                                            color: #2C79B9;
                                            font-weight: bold;
                                            font-size: 20px;
                                        }
                                        .paragraph{font-size: 16px;}
                                        .btn{
                                            text-align: center;
                                            background-color: #007bff;
                                            color: #fbfef9 !important;
                                            font-weight: bold;
                                            text-decoration: none;
                                            border: 1px solid transparent;
                                            padding: .375rem .75rem;
                                            font-size: 1rem;
                                            line-height: 1.5;
                                            border-radius: .25rem;
                                            transition: color .15s ease-in-out,background-color .15s ease-in-out,                   border-color .15s ease-in-out,box-shadow .15s ease-in-out;
                                        }
                                        .btn:hover{
                                            background-color: #0069d9;
                                            border-color: #0062cc;
                                            text-decoration: none;
                                        }
                                        .font-bold{ font-weight: bold }
                                    </style>
                                </head>
                                <body>
                                    <p class='header'>Recuperación de contraseña</p>
                                    <p class='paragraph'><span class='font-bold'>Correo:</span> {$user['email']}</p>
                                    <p class='paragraph'><span class='font-bold'>Ha solicitado recuperar su contraseña en ".ROOT_URL."</p>.
                                    <p class='paragraph'><span class='font-bold'>Si es así, haga clic en el siguiente botón:</p>

                                    <a href='".ROOT_URL."/auth/recover/{$data['hash']}/{$user['username']}' class='btn'>Recuperar contraseña</a>
                                </body>
                            </html>
                            ";

                $mail->Body = utf8_decode($body);

                /* SMTP parameters */
                $mail->isSMTP();

                /* SMTP server */
                $mail->Host = EMAIL_HOST;

                /* SMTP authentication */
                $mail->SMTPAuth = true;

                $mail->SMTPSecure = 'tls';
                // $mail->ENCRYPTION = "none";

                /* From email */
                $mail->Username = FROM_EMAIL;

                /* Email password */
                $mail->Password = EMAIL_PASS;

                /* SMTP server port */
                $mail->Port = 587;

                /* Send email */
                if ($mail->send()) {
                    Functions::flash('success', 'Se ha enviado el correo de recuperación de contraseña. <br /> Revise su correo electrónico.');

                    return;
                }
            } catch (Exception $e) {
                Functions::flash('error', 'No hay un usuario registrado con este correo');

                return $data;
            }

            header('Location:'.ROOT_URL.'/auth/login');
        }

        return;
    }

    /**
     * Change password.
     */
    public function pwd_change($hash, $username)
    {
        $this->query('SELECT id, username FROM users WHERE username = :username AND hash = :hash');
        $this->bind(':username', $username);
        $this->bind(':hash', $hash);
        $user = $this->singleRow();

        if (!$user) {
            header('Location:'.ROOT_URL.'/errors/403.php');

            return;
        }

        if (!isset($_POST['token'])) {
            return $user;
        }

        $error_message = 'No se pudo actualizar su contraseña. <br /> Por favor, intente de nuevo.';
        $token_message = 'Se ha agotado el tiempo de espera o lo ha intentado demasiado rápido. <br /> Por favor, recargue e intente de nuevo.';

        if (Functions::form_success($_SESSION['token'], $_POST['token'], $error_message, true, $token_message, true)) {
            /**
             * Form data.
             */
            $data = Functions::form_data([
                'password',
                'confirm_password',
            ]);

            // Confirm password
            Functions::confirm_password($data['password'], $data['confirm_password'], 'password', 'confirm_password');

            if (Functions::has_message(array_keys($data))) {
                return $user;
            }

            try {
                $this->query('UPDATE users SET password = :password, hash = :hash, updated_at = :updated WHERE id = :id');
                $this->bind(':password', $data['password_hashed']);
                $this->bind(':hash', null);
                $this->bind(':updated', Functions::now());
                $this->bind(':id', $user['id']);
                $this->execute();
                Functions::flash('success', 'Su contraseña ha sido actualizada');
            } catch (\Exception $e) {
                Functions::flash('error', 'No se pudo cambiar su contraseña');
            }
        }

        header('Location:'.ROOT_URL.'/auth/login');
    }

    /**
     * Verify.
     */
    public function verify($hash, $username)
    {
        try {
            $this->query('SELECT id FROM users WHERE hash = :hash AND username = :username');
            $this->bind(':username', $username);
            $this->bind(':hash', $hash);
            $user = $this->singleRow();

            if ($user) {
                $this->query('UPDATE users SET status = :status, hash = :hash, created_at = :created WHERE id = :id');
                $this->bind(':status', '1');
                $this->bind(':hash', null);
                $this->bind(':created', Functions::now());
                $this->bind(':id', $user['id']);
                $this->execute();
                Functions::flash('success', 'Ha verificado el usuario correctamente');
            } else {
                Functions::flash('error', 'Ya ha verificado este usuario');
            }
        } catch (\Exception $e) {
            Functions::flash('error', 'No pudo verificar el usuario');
        }

        header('Location:'.ROOT_URL);
    }
}
