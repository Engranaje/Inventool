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

        if (Functions::form_success($_SESSION['token'], $_POST['token'], $error_message, true, $token_message, true)) {
            /**
             * Form data.
             */
            // If Password change is allowed, catch password
            if (PASSWORD_CHANGE) {
                $data = Functions::form_data([
                    ['int' => 'role_id'],
                    'password',
                    'confirm_password',
                ]);
            } else {
                $data = Functions::form_data([
                    ['int' => 'role_id']
                ]);
            }

            // Update user
            try {
                // If password change is not allowed, do this
                if (!PASSWORD_CHANGE) {
                    $this->query('UPDATE users SET role_id = :role, updated_at = :updated WHERE id = :id');
                    $this->bind(':role', $data['role_id']);
                    $this->bind(':updated', Functions::now());
                    $this->bind(':id', $id);
                } else {
                    // If password is not set, leave it as is
                    if (Functions::blank($data['password'])) {
                        $this->query('UPDATE users SET role_id = :role, updated_at = :updated WHERE id = :id');
                        $this->bind(':role', $data['role_id']);
                        $this->bind(':updated', Functions::now());
                        $this->bind(':id', $id);
                    } else {
                        $this->query('UPDATE users SET password = :password, role_id = :role, updated_at = :updated
                                    WHERE id = :id');
                        $this->bind(':password', $data['password_hashed']);
                        $this->bind(':role', $data['role_id']);
                        $this->bind(':updated', Functions::now());
                        $this->bind(':id', $id);
                    }
                }
                $this->execute();

                Functions::flash('success', 'El usuario ha sido actualizado correctamente.');
            } catch (\Exception $e) {
                Functions::flash('error', 'Hubo un error intentando actualizar el usuario. <br /> Por favor, intente de nuevo.');
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

        if (Functions::form_success($_SESSION['token'], $_POST['token'], $error_message, true, $token_message, true)) {
            /**
             * Form data.
             */
            $data = Functions::form_data([
                'name',
                'username',
                'email',
                ['int' => 'role_id']
            ]);

            if (Functions::has_message(array_keys($data))) {
                return [
                    'data' => $data,
                    'roles' => $roles
                ];
            }

            // Create a random provisional password
            $number = mt_rand(1000, 9999);
            $password = password_hash($number, PASSWORD_BCRYPT, ['cost' => 12]);

            try {
                $this->query('INSERT INTO users (name, username, email, password, role_id, status, created_at) VALUES (:name, :username, :email, :password, :role_id, :status, :created)');
                $this->bind(':name', $data['name']);
                $this->bind(':username', $data['username']);
                $this->bind(':email', $data['email']);
                $this->bind(':password', $password);
                $this->bind(':role_id', $data['role_id']);
                $this->bind(':status', '1');
                $this->bind(':created', Functions::now());
                $this->execute();
            } catch (\Exception $e) {
                Functions::flash('error', 'El nombre de usuario o el correo ya está en uso');

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
                            $this->bind(':delete_date', Functions::now());
                            $this->bind(':id', $id);
                            $this->execute();

                            Functions::flash('success', 'El usuario ha sido eliminado correctamente.');
                        } catch (\Exception $e) {
                            Functions::flash('error', 'Hubo un error intentando eliminar el usuario. <br /> Por favor, intente de nuevo.');
                        }

                        $_SESSION['submitted'] = true;
                    }
                } else {
                    Functions::flash('error', 'Se ha agotado el tiempo de espera o lo ha intentado demasiado rápido. <br /> Por favor, recargue e intente de nuevo.');
                }
            } else {
                Functions::flash('error', 'No se pudo eliminar el usuario. <br /> Por favor, intente de nuevo.');
            }
        } else {
            Functions::flash('error', 'No se pudo eliminar el usuario. <br /> Por favor, intente de nuevo.');
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

            Functions::flash('success', 'El usuario ha sido recuperado correctamente.');
        } catch (\Exception $e) {
            Functions::flash('error', 'Hubo un error intentando recuperar el usuario. <br /> Por favor, intente de nuevo.');
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
            $this->bind(':updated', Functions::now());
            $this->bind(':id', $id);
            $this->execute();

            Functions::flash('success', 'El usuario ha sido aprobado y ya tiene permisos para utilizar la aplicación.');
        } catch (\Exception $e) {
            Functions::flash('error', 'Hubo un error intentando aprobar el usuario. <br /> Por favor, intente de nuevo.');
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
            $this->bind(':updated', Functions::now());
            $this->bind(':id', $id);
            $this->execute();

            Functions::flash('success', 'El usuario ha sido desaprobado y ya no tiene permisos para utilizar la aplicación.');
        } catch (\Exception $e) {
            Functions::flash('error', 'Hubo un error intentando desaprobar el usuario. <br /> Por favor, intente de nuevo.');
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

            Functions::flash('success', 'El usuario ha sido eliminado permanentemente.');
        } catch (\Exception $e) {
            Functions::flash('error', 'Hubo un error intentando eliminar el usuario. <br /> Por favor, intente de nuevo.');
        }

        header('Location:' . ROOT_URL . '/admin');
    }
}
