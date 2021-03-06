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

        if (form_success($_SESSION['token'], $_POST['token'], $error_message)) {
            // Form data
            $data = form_data(['username', 'password']);

            try {
                $this->query('SELECT users.id AS user_id, users.name AS user_name, username, password, users.hash, roles.name AS role, status FROM users
                        JOIN roles
                            ON roles.id = users.role_id
                        WHERE username = :username');
                $this->bind(':username', $data['username']);
                $user = $this->singleRow();

                if ($user) {
                    // If user is not active, return
                    if (!isActive($user) || !blank($user['hash'])) {
                        flash('error', 'Su usuario aún no ha sido activado. <br /> Contacte con el administrador.');

                        return;
                    }

                    // Verify password
                    if (password_verify($data['password'], $user['password'])) {
                        if(DEMO_MODE){
                            $this->query('SELECT id FROM demo WHERE address = :address');
                            $this->bind(':address', address());
                            $demo_id = $this->singleRow();
                            $_SESSION['demo_id'] = $demo_id['id'];
                        }
                        // Start session
                        $_SESSION['user_id'] = $user['user_id'];
                        $_SESSION['name'] = $user['user_name'];
                        $_SESSION['username'] = $user['username'];
                        $_SESSION['role'] = $user['role'];
                        $_SESSION['status'] = $user['status'];
                        $_SESSION['auth'] = true;
                        $_SESSION['user_token'] = token();
                        $_SESSION['login_time'] = time();

                        $this->query('UPDATE users SET login = :login, logout = :logout WHERE username = :username');
                        $this->bind(':login', now());
                        $this->bind(':logout', null);
                        $this->bind(':username', $data['username']);
                        $this->execute();

                        header('Location:'.ROOT_URL);
                    } else {
                        flash('error', 'El usuario y/o la contraseña son incorrectos.');
                    }
                } else {
                    flash('error', 'El usuario no existe');
                }
            } catch (\Exception $e) {
                flash('error', $error_message);
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
                $this->bind(':logout', now());
                $this->bind(':username', $username);
                $this->execute();

                if(DEMO_MODE){
                    $this->cleanDB();
                }

                header('Location:'.ROOT_URL.'/auth/login');
            } else {
                flash('error', 'No puede entrar directamente a esta dirección');
                header('Location:'.ROOT_URL);
            }
        } else {
            flash('error', 'No puede entrar directamente a esta dirección');
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

        if (form_success($_SESSION['token'], $_POST['token'], $error_message, true, $token_message, true)) {
            require(ROOT_PATH.'vendor/autoload.php');

            // Clase para capturar excepciones
            include_once ROOT_PATH.'PHPMailer/src/Exception.php';

            // Clase principal de PHPMailer
            include_once ROOT_PATH.'PHPMailer/src/PHPMailer.php';

            // Clase para el servidor SMTP
            include_once ROOT_PATH.'PHPMailer/src/SMTP.php';

            /**
             * Form data.
             */
            $data = form_data([
                'name',
                'username',
                'email',
                'password',
                'confirm_password',
            ]);

            // Confirm password if it's set
            confirm_password($data['password'], $data['confirm_password'], 'password', 'confirm_password');

            if (has_message(array_keys($data))) {
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
                    flash('success', 'Se ha registrado correctamente. <br /> Debe esperar a que el administrador apruebe su registro para poder iniciar sesión.');
                } else {
                    flash('error', 'El nombre de usuario o el correo ya están en uso.');

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
                    flash('error', 'Hubo un error tratando de registrarlo. <br /> Por favor, intente de nuevo o comuníquese con el administrador.');
                }
            } catch (Exception $e) {
                flash('error', 'El nombre de usuario o el correo ya está en uso');

                return $data;
            }

            header('Location:'.ROOT_URL.'/auth/login');
        }

        return;
    }

    /**
     * Register demo user.
     */
    public function register_demo()
    {
        if (!isset($_POST['token'])) {
            return;
        }

        $error_message = 'No se pudo registrar el usuario. <br /> Por favor, intente de nuevo.';
        $token_message = 'Se ha agotado el tiempo de espera o lo ha intentado demasiado rápido. <br /> Por favor, recargue e intente de nuevo.';

        if (form_success($_SESSION['token'], $_POST['token'], $error_message, true, $token_message, true)) {
            /**
             * Form data.
             */
            $data = form_data([
                'name',
                'username',
                'email',
                'password',
                'confirm_password',
            ]);

            // Confirm password if it's set
            confirm_password($data['password'], $data['confirm_password'], 'password', 'confirm_password');

            if (has_message(array_keys($data))) {
                return $data;
            }

            try {
                $address = address();

                $this->query('INSERT INTO demo (address, created_at) VALUES (:address, :created)');
                $this->bind(':address', $address);
                $this->bind(':created', now());
                $this->execute();
                $demo_id = $this->lastInsertId();

                $this->query('INSERT INTO users (name, username, email, password, role_id, status, demo_id) VALUES (:name, :username, :email, :password, :role_id, :status, :demo_id)');
                $this->bind(':name', $data['name']);
                $this->bind(':username', $data['username']);
                $this->bind(':email', $data['email']);
                $this->bind(':password', $data['password_hashed']);
                $this->bind(':role_id', '1');
                $this->bind(':status', '1');
                $this->bind(':demo_id', $demo_id);
                $this->execute();

                if ($this->lastInsertId() > 0) {
                    flash('success', 'Se ha registrado correctamente. <br /> Puede probar la aplicación durante 30 minutos antes de que sus datos se eliminen automáticamente.');
                } else {
                    flash('error', 'El nombre de usuario o el correo ya están en uso, o ya este IP está registrado.');

                    return $data;
                }

            } catch (Exception $e) {
                flash('error', 'El nombre de usuario o el correo ya está en uso');

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

        if (form_success($_SESSION['token'], $_POST['token'], $error_message, true, $token_message, true)) {
            // Clase para capturar excepciones
            include ROOT_PATH.'PHPMailer/src/Exception.php';

            // Clase principal de PHPMailer
            include ROOT_PATH.'PHPMailer/src/PHPMailer.php';

            // Clase para el servidor SMTP
            include ROOT_PATH.'PHPMailer/src/SMTP.php';

            require ROOT_PATH.'vendor/autoload.php';

            /**
             * Form data.
             */
            $data = form_data(['email']);

            if (has_message(array_keys($data))) {
                return $data;
            }

            // Initialize PHPMailer
            $mail = new PHPMailer(true);

            try {
                $this->query('SELECT username, email FROM users WHERE email = :email');
                $this->bind(':email', $data['email']);
                $user = $this->singleRow();

                if (!$user) {
                    flash('error', 'No hay un usuario registrado con este correo');

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
                    flash('success', 'Se ha enviado el correo de recuperación de contraseña. <br /> Revise su correo electrónico.');

                    return;
                }
            } catch (Exception $e) {
                flash('error', 'No hay un usuario registrado con este correo');

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

        if (form_success($_SESSION['token'], $_POST['token'], $error_message, true, $token_message, true)) {
            /**
             * Form data.
             */
            $data = form_data([
                'password',
                'confirm_password',
            ]);

            // Confirm password
            confirm_password($data['password'], $data['confirm_password'], 'password', 'confirm_password');

            if (has_message(array_keys($data))) {
                return $user;
            }

            try {
                $this->query('UPDATE users SET password = :password, hash = :hash, updated_at = :updated WHERE id = :id');
                $this->bind(':password', $data['password_hashed']);
                $this->bind(':hash', null);
                $this->bind(':updated', now());
                $this->bind(':id', $user['id']);
                $this->execute();
                flash('success', 'Su contraseña ha sido actualizada');
            } catch (\Exception $e) {
                flash('error', 'No se pudo cambiar su contraseña');
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
                $this->bind(':created', now());
                $this->bind(':id', $user['id']);
                $this->execute();
                flash('success', 'Ha verificado el usuario correctamente');
            } else {
                flash('error', 'Ya ha verificado este usuario');
            }
        } catch (\Exception $e) {
            flash('error', 'No pudo verificar el usuario');
        }

        header('Location:'.ROOT_URL);
    }

    /**
     * Clean database
     */
    public function cleanDB()
    {
        $time = date('Y-m-d H:i:s', time() - ( 60 * 30 ));

        $sql = 'DELETE FROM demo WHERE created_at < :time;
                ALTER TABLE demo AUTO_INCREMENT = 1;
                ALTER TABLE users AUTO_INCREMENT = 1;
                ALTER TABLE transaction AUTO_INCREMENT = 1;
                ALTER TABLE stock AUTO_INCREMENT = 1;
                ALTER TABLE kit_components AUTO_INCREMENT = 1;';

        $this->query($sql);
        $this->bind(':time', $time);
        $this->execute();
    }
}
