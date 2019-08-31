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