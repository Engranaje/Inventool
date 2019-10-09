<?php
    $_SESSION['token_time'] = time();
    $_SESSION['submitted'] = false;
    $user = $viewmodel;
    $types = [
        'name',
        'username',
        'email',
        'current_password',
        'new_password',
        'confirm_new_password',
        'error'
    ];
?>

<h1 class="text-center">Perfil de usuario</h1>

<div class="row justify-content-center">
    <div class="col-md-6">
        <?php if (Functions::has_message($types)) { ?>

                <div class="lzi alert-msg alert-danger text-center mx-auto mt-3 mb-0" role="alert">
                    <div class="d-inline-block m-0 py-0">
                            <?php
                                foreach ($types as $key => $type) {
                                    if (Functions::has_message($type)) {
                                        ?>
                                <p class="m-3">
                                    <?php echo Functions::message($type); ?>
                                </p>
                            <?php
                                    }
                                } ?>
                    </div>
                </div>

        <?php } else if(Functions::has_message('success')){ ?>

            <div class="lzi alert-msg alert-success text-center mx-auto mt-3 mb-0" role="alert">
                <div class="d-inline-block m-0 py-0">
                    <p class="m-3">
                        <?php echo Functions::message('success'); ?>
                    </p>
                </div>
            </div>

        <?php } ?>

        <form action="<?php echo ROOT_URL.'/profile/update/'.$user['id']; ?>" method="post">
            <input type="hidden" name="token" value="<?php echo $session->getToken(); ?>">

            <div class="form-group">
                <label for="name">Nombre</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    class="form-control<?php echo Functions::has_message('name') ? ' is-invalid' : ''; ?>"
                    placeholder="Nombre completo"
                    value="<?php echo $user['name']; ?>"
                    required>
            </div>

            <div class="form-group">
                <label for="username">Nombre de usuario</label>
                <input type="text" name="username" id="username" class="form-control" placeholder="Nombre de usuario" value="<?php echo $user['username']; ?>" required>
            </div>

            <div class="form-group">
                <label for="email">Correo</label>
                <input type="email" name="email" id="email" class="form-control" placeholder="Nombre de usuario" value="<?php echo $user['email']; ?>" required>
            </div>

            <div class="form-group">
                <label for="current_password">Contraseña actual</label>
                <input type="password" name="current_password" id="current_password" class="form-control" placeholder="Contraseña actual" required>
            </div>

            <div class="form-group">
                <label for="new_password">Nueva contraseña</label>
                <input type="password" name="new_password" id="new_password" class="form-control" placeholder="Nueva Contraseña" autocomplete="new-password">
            </div>

            <div class="form-group">
                <label for="confirm_new_password">Confirmar nueva contraseña</label>
                <input type="password" name="confirm_new_password" id="confirm_new_password" class="form-control" placeholder="Confirmar nueva Contraseña" autocomplete="new-password">
            </div>

            <div class="my-4 row col-md-12 justify-content-between p-0 m-0">
                <input type="submit" value="Actualizar" class="btn btn-primary btn-sqr col-md-5">
                <a href="#"
                    class="btn btn-secondary btn-sqr col-md-5 show-content"
                    data-type="permanent-delete"
                    data-record-type="el usuario"
                    data-text="<?php echo $user['name']; ?>"
                    data-id="<?php echo $user['id']; ?>"
                    data-action="<?php echo ROOT_URL.'/profile/delete/'.$user['id']; ?>">
                        Eliminar
                </a>
            </div>
        </form>
    </div>
</div>

<?php require_once PRIVATE_PATH . '/views/inc/permanent-user-delete-container.php'; ?>