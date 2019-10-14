<!-- Modal -->
<?php if(DEMO_MODE){ ?>
    <div class="modal fade" id="demo-mode-modal" tabindex="-1" role="dialog" aria-labelledby="demo-mode-modal-Title" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLongTitle">Modo de prueba</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <p>Debido a que está en el modo de prueba, esta información no será guardada.</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-primary" data-dismiss="modal">Ok</button>
                </div>
            </div>
        </div>
    </div>
<?php } ?>

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
            if (has_message('success')) {
                ?>

                <div class="lzi alert-msg alert-success text-center mx-auto mt-3 mb-0" role="alert">
                    <div class="d-inline-block m-0">
                        <p class="mb-0">
                            <?php echo message('success'); ?>
                        </p>
                    </div>
                </div>

        <?php
            } elseif (has_message(['error', 'username', 'password'])) {
                ?>
            <div class="lzi alert-msg alert-danger text-center mx-auto mt-3 mb-0" role="alert">
                <div class="d-inline-block m-0">
                    <p class="mb-0">
                        <?php echo message('error'); ?>
                    </p>
                </div>
            </div>
        <?php
            } ?>

        <div class="card">
            <div class="card-header bg-primary card-title-white">Información de usuario</div>
            <div class="card-body">
                <p class="user-info-head"><?php echo $user['name']; ?> (<?php echo $role; ?>)</p>
                <p class="text-center m-0 user-info-p-strong"><strong>Nombre de usuario</strong></p>
                <p class="text-center mb-3 user-info-p"><?php echo $user['username']; ?></p>
                <p class="text-center m-0 user-info-p-strong"><strong>Correo</strong></p>
                <p class="text-center mb-3 user-info-p"><?php echo $user['email']; ?></p>
                <p class="text-center m-0 user-info-p-strong"><strong>Contraseña</strong></p>
                <p class="text-center user-info-p"><?php echo $password; ?></p>
            </div>
            <div class="card-footer">El usuario puede entrar con esta contraseña provisional, la cual podrá seguir utilizando o cambiar desde su perfil al iniciar sesión</div>
        </div>
    </div>
</div>