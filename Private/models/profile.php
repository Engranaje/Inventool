<?php

class ProfileModel extends Model
{
    /**
     * Show Profile.
     */
    public function index($id)
    {
        $this->query('SELECT id, name, username, email FROM users WHERE id = :id');
        $this->bind(':id', $id);

        return $this->singleRow();
    }

    /**
     * Update user.
     */
    public function update($id)
    {
        if (!isset($_POST['token'])) {
            return;
        }

        $error_message = 'No se pudo actualizar su perfil. <br /> Por favor, intente de nuevo.';
        $token_message = 'Se ha agotado el tiempo de espera o lo ha intentado demasiado rápido. <br /> Por favor, recargue e intente de nuevo.';

        if (Functions::form_success($_SESSION['token'], $_POST['token'], $error_message, true, $token_message, true)) {
            // Form data
            $data = Functions::form_data([
                'name',
                'username',
                'email',
                ['password' => 'current_password'],
                ['password' => 'new_password'],
                'confirm_new_password',
            ]);

            // Confirm new password if it's set
            Functions::confirm_password($data['new_password'], $data['confirm_new_password'], 'new_password', 'confirm_new_password');

            // Flash messages
            if (Functions::has_message(array_keys($data))) {
                header('Location:'.ROOT_URL.'/profile');

                return $data;
            }

            // Check that actual password is correct
            try {
                $this->query('SELECT password FROM users WHERE id = :id');
                $this->bind(':id', $id);
                $user = $this->singleRow();
            } catch (Exception $e) {
                Functions::flash('error', 'Hubo un error tratando de actualizar su perfil. <br /> Por favor, intente de nuevo o comuníquese con el administrador.');
            }

            if (!password_verify($data['current_password'], $user['password'])) {
                header('Location:'.ROOT_URL.'/profile');
                Functions::flash('error', 'Debe ingresar su contraseña actual para poder actualizar su perfil');

                return $data;
            }

            // Update password
            try {
                if (Functions::blank($data['new_password'])) {
                    $this->query('UPDATE users SET name = :name, username = :username, email = :email, updated_at = :updated WHERE id = :id');
                    $this->bind(':name', $data['name']);
                    $this->bind(':username', $data['username']);
                    $this->bind(':email', $data['email']);
                    $this->bind(':updated', Functions::now());
                    $this->bind(':id', $id);
                } else {
                    $this->query('UPDATE users SET name = :name, username = :username, email = :email, password = :password, updated_at = :updated WHERE id = :id');
                    $this->bind(':name', $data['name']);
                    $this->bind(':username', $data['username']);
                    $this->bind(':email', $data['email']);
                    $this->bind(':password', $data['new_password_hashed']);
                    $this->bind(':updated', Functions::now());
                    $this->bind(':id', $id);
                }
                $this->execute();
                Functions::flash('success', 'Datos actualizados correctamente');
            } catch (PDOException $e) {
                Functions::flash('error', 'El nombre de usuario o el correo ya está en uso');
            } catch (Exception $e) {
                Functions::flash('error', 'Hubo un error tratando de actualizar su perfil. <br /> Por favor, intente de nuevo o comuníquese con el administrador.');
            }
        }

        header('Location:'.ROOT_URL.'/profile');
    }

    /**
     * Delete user.
     */
    public function delete($id)
    {
        // Check tokens
        if (isset($_POST['token'])) {
            $error_message = 'No se pudo eliminar su perfil. <br /> Por favor, intente de nuevo.';
            $token_message = 'Se ha agotado el tiempo de espera o lo ha intentado demasiado rápido. <br /> Por favor, recargue e intente de nuevo.';

            if (!Functions::form_success($_SESSION['token'], $_POST['token'], $error_message, true, $token_message)) {
                return;
            }
        }

        // Form data
        $data = Functions::form_data([
            'username',
        ]);

        // Flash messages
        if (Functions::has_message(array_keys($data))) {
            header('Location:'.ROOT_URL.'/profile');

            return $data;
        }

        // Check that username is correct
        try {
            $this->query('SELECT username FROM users WHERE id = :id');
            $this->bind(':id', $id);
            $user = $this->singleRow();
        } catch (Exception $e) {
            Functions::flash('error', $error_message);
        }

        if (strtolower($user['username']) != strtolower($data['username'])) {
            header('Location:'.ROOT_URL.'/profile');
            Functions::flash('error', 'Debe ingresar su nombre de usuario para poder eliminar su perfil');

            return $data;
        }

        try {
            // Search all administrator for validation
            $this->query('SELECT users.id AS user_id, status, roles.name AS role FROM users
                    JOIN roles
                        ON roles.id = users.role_id
                    WHERE roles.name = :role AND status = :status');
            $this->bind(':role', ADMIN_ROLE);
            $this->bind(':status', '1');
            $admins = $this->resultset();

            // Check authenticated user role for validation
            $this->query('SELECT roles.name AS role FROM users
                    JOIN roles
                        ON roles.id = users.role_id
                    WHERE users.id = :id');
            $this->bind(':id', $id);
            $admin = $this->singleRow();

            // Return if authenticated user is an administrator and there are no more administrators active
            if (sizeof($admins) <= 1 && strtolower($admin['role']) == ADMIN_ROLE) {
                Functions::flash('error', 'Debe asignar otro administrador antes de eliminar su cuenta');
                header('Location:'.ROOT_URL.'/admin');

                return;
            }

            // Delete user
            $this->query('DELETE FROM users WHERE id = :id');
            $this->bind(':id', $id);
            $this->execute();

            Functions::flash('success', 'Su usuario ha sido eliminado permanentemente');
        } catch (Exception $e) {
            Functions::flash('error', $error_message);
        }

        header('Location:' . ROOT_URL . '/auth/login');
    }
}
