<?php
    $user = $_SESSION['user_info'];
    $role = $_SESSION['user_role'];
    $password = $_SESSION['user_password'];
    unset($_SESSION['user_info']);
    unset($_SESSION['user_role']);
    unset($_SESSION['user_password']);
    $types = [
        'success',
        'error',
    ];
    $message = array_fill_keys($types, false);
?>

<div class="row justify-content-center center-box align-items-center">
    <div class="col-md-6">

        <?php
            if (Functions::has_message('success')) {
        ?>

                <div class="lzi alert-msg alert-success text-center mx-auto mt-3 mb-0" role="alert">
                    <div class="d-inline-block m-0">
                        <p class="mb-0">
                            <?php echo Functions::message('success'); ?>
                        </p>
                    </div>
                </div>

        <?php
            }else if(Functions::has_message(['error', 'username', 'password'])){
        ?>
            <div class="lzi alert-msg alert-danger text-center mx-auto mt-3 mb-0" role="alert">
                <div class="d-inline-block m-0">
                    <p class="mb-0">
                        <?php echo Functions::message('error'); ?>
                    </p>
                </div>
            </div>
        <?php } ?>

        <div class="card">
            <div class="card-header">Información de usuario</div>
            <div class="card-body">
                <p><strong>Nombre:</strong> <?php echo $user['name']; ?></span></p>
                <p><strong>Nombre de usuario:</strong> <?php echo $user['username']; ?></span></p>
                <p><strong>Correo:</strong> <?php echo $user['email']; ?></span></p>
                <p><strong>Rol</strong>: <?php echo $role; ?></span></p>
                <p><strong>Contraseña:</strong> <?php echo $password; ?></span></p>
            </div>
            <div class="card-footer">El usuario puede entrar con esta contraseña provisional, la cual podrá seguir utilizando o cambiar desde su perfil al iniciar sesión</div>
        </div>
    </div>
</div>