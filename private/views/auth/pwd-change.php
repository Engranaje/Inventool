<?php
$_SESSION['token_time'] = time();
$_SESSION['submitted'] = false;
$types = [
    'password',
    'confirm_password',
    'error',
];
$message = array_fill_keys($types, false);
?>
<div class="flex-column justify-content-center center-box">
    <h2 class="text-center">Cambiar contraseña</h2>

    <div class="d-flex justify-content-center">
        <div class="card col-9 col-md-6">
            <?php if (Functions::has_message($types)) { ?>

                <div class="lzi alert-msg alert-danger text-center mx-auto mt-3 mb-0" role="alert">
                    <div class="d-inline-block m-0">
                        <?php
                            foreach ($types as $key => $type) {
                                if (Functions::has_message($type)) {
                                    $message[$type] = Functions::has_message($type);
                        ?>
                            <p class="m-3">
                                <?php echo Functions::message($type); ?>
                            </p>
                        <?php
                                } else {
                                    $message[$type] = false;
                                }
                            }
                        ?>
                    </div>
                </div>

            <?php } ?>

            <div class="card-body">
                <form method="post">
                    <input type="hidden" name="token" value="<?php echo $session->getToken(); ?>">

                    <div class="form-group">
                        <label for="username">Usuario</label>
                        <label class="form-control"><?php echo $viewmodel['username']; ?></label>
                    </div>

                    <div class="form-group">
                        <label for="password">Nueva contraseña</label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            class="form-control<?php echo $message['password'] ? ' is-invalid' : ''; ?>"
                            placeholder="Nueva contraseña"
                            autocomplete="new-password"
                            required>
                    </div>

                    <div class="form-group">
                        <label for="confirm_password">Repetir nueva contraseña</label>
                        <input
                            type="password"
                            name="confirm_password"
                            id="confirm_password"
                            class="form-control<?php echo $message['confirm_password'] ? ' is-invalid' : ''; ?>"
                            placeholder="Repetir nueva contraseña"
                            autocomplete="new-password"
                            required>
                    </div>

                    <div class="form-group">
                        <input type="submit" name="submit" value="Cambiar" class="btn btn-primary">
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>