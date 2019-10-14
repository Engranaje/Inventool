<?php
class AdminModel extends Model
{
    /**
     * Show users list
     */
    public function users()
    {
        // Find all records
        $this->query('SELECT users.id AS user_id, users.name AS user_name, username, status, roles.name AS role, created_at FROM users
                    JOIN roles
                        ON roles.id = users.role_id
                    WHERE deleted_at IS NULL AND users.id <> :id');
        $this->bind(':id', $_SESSION['user_id']);
        return $this->resultset();
    }

    /**
     * Show deleted users list
     */
    public function deleted_users()
    {
        // Find all records
        $this->query('SELECT users.id AS user_id, users.name AS user_name, username, roles.name AS role, created_at FROM users
                    JOIN roles
                        ON roles.id = users.role_id
                    WHERE deleted_at IS NOT NULL AND users.id <> :id');
        $this->bind(':id', $_SESSION['user_id']);
        return $this->resultset();
    }

    /**
     * Show edit user page
     */
    public function edit_user($id)
    {
        // Find all records
        $this->query('SELECT users.id AS user_id, users.name AS user_name, username, roles.name AS role, role_id, created_at FROM users
                    JOIN roles
                        ON roles.id = users.role_id
                    WHERE users.id = :id');
        $this->bind(':id', $id);
        $user = $this->singleRow();

        // Find all roles
        $this->query('SELECT * FROM roles');
        $roles = $this->resultset();

        return [
            'user' => $user,
            'roles' => $roles,
            'id' => $id,
        ];
    }

    /**
     * Update user information
     */
    public function update_user($id)
    {
        if (!isset($_POST['token'])) {
            return;
        }

        $error_message = 'No se pudo actualizar el usuario. <br /> Por favor, intente de nuevo.';
        $token_message = 'Se ha agotado el tiempo de espera o lo ha intentado demasiado rápido. <br /> Por favor, recargue e intente de nuevo.';

        if (form_success($_SESSION['token'], $_POST['token'], $error_message, true, $token_message, true)) {
            /**
             * Form data.
             */
            // If Password change is allowed, catch password
            if (PASSWORD_CHANGE) {
                $data = form_data([
                    ['int' => 'role_id'],
                    'password',
                    'confirm_password',
                ]);

                // Confirm password if it's set
                confirm_password($data['password'], $data['confirm_password'], 'password', 'confirm_password');

                if (has_message(array_keys($data))) {
                    header('Location:' . ROOT_URL . '/admin/user/'.$id.'/edit');
                    return $data;
                }
            } else {
                $data = form_data([
                    ['int' => 'role_id']
                ]);
            }

            // Update user
            try {
                // If password change is not allowed, do this
                if (!PASSWORD_CHANGE) {
                    $this->query('UPDATE users SET role_id = :role, updated_at = :updated WHERE id = :id');
                    $this->bind(':role', $data['role_id']);
                    $this->bind(':updated', now());
                    $this->bind(':id', $id);
                } else {
                    // If password is not set, leave it as is
                    if (blank($data['password'])) {
                        $this->query('UPDATE users SET role_id = :role, updated_at = :updated WHERE id = :id');
                        $this->bind(':role', $data['role_id']);
                        $this->bind(':updated', now());
                        $this->bind(':id', $id);
                    } else {
                        $this->query('UPDATE users SET password = :password, role_id = :role, updated_at = :updated
                                    WHERE id = :id');
                        $this->bind(':password', $data['password_hashed']);
                        $this->bind(':role', $data['role_id']);
                        $this->bind(':updated', now());
                        $this->bind(':id', $id);
                    }
                }
                $this->execute();

                flash('success', 'El usuario ha sido actualizado correctamente.');
            } catch (\Exception $e) {
                flash('error', 'Hubo un error intentando actualizar el usuario. <br /> Por favor, intente de nuevo.');
            }
        }

        header('Location:' . ROOT_URL . '/admin');
    }

    /**
     * Create user
     */
    public function create_user()
    {
        // Find all roles
        $this->query('SELECT * FROM roles');
        $roles = $this->resultset();

        if (!isset($_POST['token'])) {
            return ['roles' => $roles];
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
                ['int' => 'role_id']
            ]);

            if (has_message(array_keys($data))) {
                return [
                    'data' => $data,
                    'roles' => $roles
                ];
            }

            // Create a random provisional password
            $number = mt_rand(1000, 9999);
            $password = password_hash($number, PASSWORD_BCRYPT, ['cost' => 12]);

            try {
                if(!DEMO_MODE){
                    $this->query('INSERT INTO users (name, username, email, password, role_id, status, created_at) VALUES (:name, :username, :email, :password, :role_id, :status, :created)');
                    $this->bind(':name', $data['name']);
                    $this->bind(':username', $data['username']);
                    $this->bind(':email', $data['email']);
                    $this->bind(':password', $password);
                    $this->bind(':role_id', $data['role_id']);
                    $this->bind(':status', '1');
                    $this->bind(':created', now());
                    $this->execute();
                }
            } catch (\Exception $e) {
                flash('error', 'El nombre de usuario o el correo ya está en uso');

                return [
                    'data' => $data,
                    'roles' => $roles
                ];
            }

            // Search role name
            $this->query('SELECT name FROM roles WHERE id = :id');
            $this->bind(':id', $data['role_id']);
            $role =  $this->singleRow();
        }

        $_SESSION['user_info'] = $data;
        $_SESSION['user_role'] = $role['name'];
        $_SESSION['user_password'] = $number;
        header('Location:' . ROOT_URL . '/admin/user/info');
    }

    /**
     * Show created user information
     */
    public function user_info()
    { }

    /**
     * Delete user
     */
    public function delete_user($id)
    {
        if (
            isset($_SESSION['token']) &&
            isset($_POST['token']) &&
            !empty($_SESSION['token']) &&
            !empty($_POST['token'])
        ) {
            if ($_POST['token'] == $_SESSION['token']) {
                $tokenAge = time() - $_SESSION['token_time'];

                // Only continue if time passed in form is greater than 1 seconds and less than 5 minutes
                if ($tokenAge > 1 && $tokenAge < 250) {
                    // Prevent submitting more than once
                    if ($_SESSION['submitted'] == false) {
                        try {
                            $this->query('UPDATE users SET deleted_at = :delete_date WHERE id = :id');
                            $this->bind(':delete_date', now());
                            $this->bind(':id', $id);
                            $this->execute();

                            flash('success', 'El usuario ha sido eliminado correctamente.');
                        } catch (\Exception $e) {
                            flash('error', 'Hubo un error intentando eliminar el usuario. <br /> Por favor, intente de nuevo.');
                        }

                        $_SESSION['submitted'] = true;
                    }
                } else {
                    flash('error', 'Se ha agotado el tiempo de espera o lo ha intentado demasiado rápido. <br /> Por favor, recargue e intente de nuevo.');
                }
            } else {
                flash('error', 'No se pudo eliminar el usuario. <br /> Por favor, intente de nuevo.');
            }
        } else {
            flash('error', 'No se pudo eliminar el usuario. <br /> Por favor, intente de nuevo.');
        }

        header('Location:' . ROOT_URL . '/admin');
    }

    /**
     * Recover user
     */
    public function recover_user($id)
    {
        try {
            // Recover user
            $this->query('UPDATE users SET deleted_at = :value WHERE id = :id');
            $this->bind(':value', null);
            $this->bind(':id', $id);
            $this->execute();

            flash('success', 'El usuario ha sido recuperado correctamente.');
        } catch (\Exception $e) {
            flash('error', 'Hubo un error intentando recuperar el usuario. <br /> Por favor, intente de nuevo.');
        }

        header('Location:' . ROOT_URL . '/admin');
    }

    /**
     * Approve user
     */
    public function approve_user($id)
    {
        try {
            // approve user
            $this->query('UPDATE users SET status = :status, hash = :hash, updated_at = :updated WHERE id = :id');
            $this->bind(':status', '1');
            $this->bind(':hash', null);
            $this->bind(':updated', now());
            $this->bind(':id', $id);
            $this->execute();

            flash('success', 'El usuario ha sido aprobado y ya tiene permisos para utilizar la aplicación.');
        } catch (\Exception $e) {
            flash('error', 'Hubo un error intentando aprobar el usuario. <br /> Por favor, intente de nuevo.');
        }

        header('Location:' . ROOT_URL . '/admin');
    }

    /**
     * Disapprove user
     */
    public function disapprove_user($id)
    {
        try {
            // disapprove user
            $this->query('UPDATE users SET status = :status, hash = :hash, updated_at = :updated WHERE id = :id');
            $this->bind(':status', '0');
            $this->bind(':hash', null);
            $this->bind(':updated', now());
            $this->bind(':id', $id);
            $this->execute();

            flash('success', 'El usuario ha sido desaprobado y ya no tiene permisos para utilizar la aplicación.');
        } catch (\Exception $e) {
            flash('error', 'Hubo un error intentando desaprobar el usuario. <br /> Por favor, intente de nuevo.');
        }

        header('Location:' . ROOT_URL . '/admin');
    }

    /**
     * Permanently delete user
     */
    public function destroy_user($id)
    {
        try {
            // Delete record
            $this->query('DELETE FROM users WHERE id = :id');
            $this->bind(':id', $id);
            $this->execute();

            flash('success', 'El usuario ha sido eliminado permanentemente.');
        } catch (\Exception $e) {
            flash('error', 'Hubo un error intentando eliminar el usuario. <br /> Por favor, intente de nuevo.');
        }

        header('Location:' . ROOT_URL . '/admin');
    }

    /**
     * Show notifications configuration
     */
    public function notifications()
    {
        // Find all records
        $this->query('SELECT * FROM stock WHERE deleted_at IS NULL');
        return $this->resultset();
    }

    /**
     * Hide notifications today
     */
    public function hide_notifications()
    {
        setcookie('notifications', 'no', strtotime("tomorrow"), '/');
        header('Location:' . ROOT_URL);
    }

    /**
     * Notify item low stock
     */
    public function notify()
    {
        try {
            // Item to notify
            if (isset($_POST['code']) && !empty($_POST['code'])) {
                $code = filter_var($_POST['code'], FILTER_VALIDATE_INT);
            }

            // Quantity to notify
            if (isset($_POST['notify']) && !empty($_POST['notify'])) {
                $quantity = filter_var($_POST['notify'], FILTER_VALIDATE_INT);
            }

            // Select item to verify that notification quantity is not less than actual item quantity
            $this->query('SELECT stock FROM stock WHERE code = :code');
            $this->bind(':code', $code);
            $stock = $this->singleRow();

            // Update notification
            if($stock['stock'] >= $quantity){
                $this->query('UPDATE stock SET notification = :quantity WHERE code = :code');
                $this->bind(':code', $code);
                $this->bind(':quantity', $quantity);
                $this->execute();

                flash('success', 'Recibirá una notificación en la pantalla principal cuando la existencia sea ' . $quantity . ' o menor.');
            }else{
                flash('error', 'La cantidad para notificar no puede ser inferior a la cantidad actual en existencia.');
            }
        } catch (\Exception $e) {
            flash('error', 'Hubo un error intentando activar la notificación. <br /> Por favor, intente de nuevo.');
        }

        header('Location:' . ROOT_URL . '/admin');
    }

    /**
     * Disable item notifications
     */
    public function unnotify($code)
    {
        try {
            $this->query('UPDATE stock SET notification = :quantity WHERE code = :code');
            $this->bind(':code', $code);
            $this->bind(':quantity', null);
            $this->execute();

            flash('success', 'Dejará de recibir notificaciones sobre este artículo');
        } catch (\Exception $e) {
            flash('error', 'Hubo un error intentando desactivar la notificación. <br /> Por favor, intente de nuevo.');
        }

        header('Location:' . ROOT_URL . '/admin');
    }
}