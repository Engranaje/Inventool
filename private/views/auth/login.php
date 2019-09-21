<!-- Modal -->
<?php if(DEMO_MODE){ ?>
    <div class="modal fade" id="demo-mode-modal" tabindex="-1" role="dialog" aria-labelledby="demo-mode-modal-Title" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLongTitle">Modo de prueba activado</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="modal-body">
            <p>Usted está en el modo de prueba. Puede utilizar la aplicación normalmente, pero sus datos serán eliminados luego de 30 minutos o cuando cierre sesión.</p>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-primary" data-dismiss="modal">Ok</button>
        </div>
        </div>
    </div>
    </div>
<?php } ?>

<div class="flex-column justify-content-center center-box">
    <h2 class="text-center">Iniciar Sesión</h2>

    <div class="d-flex justify-content-center">
        <div class="card col-9 col-md-4">
            <?php if (Functions::has_message('success')) { ?>

                    <div class="lzi alert-msg alert-success text-center mx-auto mt-3 mb-0" role="alert">
                        <div class="d-inline-block m-0">
                            <p class="mb-0">
                                <?php echo Functions::message('success'); ?>
                            </p>
                        </div>
                    </div>

            <?php } elseif (Functions::has_message(['error', 'username', 'password'])) { ?>
                <div class="lzi alert-msg alert-danger text-center mx-auto mt-3 mb-0" role="alert">
                    <div class="d-inline-block m-0">
                        <p class="mb-0">
                            <?php echo Functions::message('error'); ?>
                        </p>
                    </div>
                </div>
            <?php } ?>

            <div class="card-body">
                <form method="post">
                    <input type="hidden" name="token" value="<?php echo $session->getToken(); ?>">

                    <div class="form-group">
                        <label for="username">Nombre de usuario</label>
                        <input
                            type="text"
                            name="username"
                            id="username"
                            class="form-control<?php echo Functions::has_message('name') ? ' is-invalid' : ''; ?>"
                            placeholder="Nombre de usuario"
                            required>
                    </div>

                    <div class="form-group">
                        <label for="password">Contraseña</label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            class="form-control<?php echo Functions::has_message('password') ? ' is-invalid' : ''; ?>"
                            placeholder="Contraseña"
                            required>
                    </div>

                    <?php if(USER_RECOVER){ ?>
                        <a href="<?php echo ROOT_URL; ?>/auth/recover" class="d-block mb-3">¿Ha olvidado su contraseña?</a>
                    <?php } ?>

                    <div class="form-group">
                        <input type="submit" name="submit" value="Iniciar Sesión" class="btn btn-primary">
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>