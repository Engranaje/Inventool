<?php
    $_SESSION['token_time'] = time();
    $_SESSION['submitted'] = false;
    $user = $viewmodel['user'];
?>
<div class="row justify-content-center">
    <div class="col-md-6">
        <?php if($viewmodel['id'] != $session->getUserId()){ ?>
            <form action="<?php echo ROOT_URL . '/admin/user/' . $user['user_id']; ?>/update" method="post">
                <input type="hidden" name="token" value="<?php echo $session->getToken(); ?>">

                <div class="form-group">
                    <label>Nombre</label>
                    <p class="form-control form-disabled"><?php echo $user['user_name']; ?></p>
                </div>

                <div class="form-group">
                    <label>Nombre de usuario</label>
                    <p class="form-control form-disabled"><?php echo $user['username']; ?></p>
                </div>

                <?php if(PASSWORD_CHANGE){ ?>
                    <div class="form-group">
                        <label for="password">Contraseña</label>
                        <input type="password" name="password" id="password" class="form-control" placeholder="Cambiar contraseña">
                    </div>

                    <div class="form-group">
                        <label for="confirm_password">Confirmar contraseña</label>
                        <input
                            type="password"
                            name="confirm_password"
                            id="confirm_password"
                            class="form-control<?php echo $message['confirm_password'] ? ' is-invalid' : ''; ?>"
                            placeholder="Confirmar contraseña">
                    </div>
                <?php } ?>

                <div class="form-group">
                    <label for="role_id">Rol</label>
                    <select name="role_id" id="role_id" class="form-control">
                        <?php
                            foreach ($viewmodel['roles'] as $role) {
                        ?>
                            <option value="<?php echo $role['id']; ?>" <?php echo ($role['id'] == $user['role_id']) ? 'selected' : ''; ?>>
                                <?php echo $role['name']; ?>
                            </option>
                        <?php
                            }
                        ?>
                    </select>
                </div>

                <div class="mt-4 row col-md-12 justify-content-between p-0 m-0">
                    <input type="submit" value="Actualizar" class="btn btn-primary col-md-5">
                    <a href="#"
                        class="btn btn-danger col-md-5 show-content"
                        data-type="delete"
                        data-record-type="el usuario"
                        data-text="<?php echo $user['user_name']; ?>"
                        data-id="<?php echo $user['user_id']; ?>"
                        data-action="<?php echo ROOT_URL . '/admin/user/' . $user['user_id']; ?>/delete">
                        Eliminar
                    </a>
                </div>
            </form>
        <?php }else{ ?>
            <h3>No puede modificar su información desde aquí. Diríjase a su perfil.</h3>
        <?php } ?>
    </div>
</div>

<?php include_once PRIVATE_PATH . '/views/inc/delete-container.php'; ?>