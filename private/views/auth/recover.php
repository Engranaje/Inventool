<?php
$_SESSION['token_time'] = time();
$_SESSION['submitted'] = false;
$types = [
    'email',
    'error',
];
$message = array_fill_keys($types, false);
?>
<div class="flex-column justify-content-center center-box">
    <h2 class="text-center">Recuperar contraseña</h2>

    <div class="d-flex justify-content-center">
        <div class="card col-9 col-md-6">
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
                } elseif (Functions::has_message(['error', 'username', 'password'])) {
                    ?>
                <div class="lzi alert-msg alert-danger text-center mx-auto mt-3 mb-0" role="alert">
                    <div class="d-inline-block m-0">
                        <p class="mb-0">
                            <?php echo Functions::message('error'); ?>
                        </p>
                    </div>
                </div>
        <?php
                } ?>
            <div class="card-body">
                <form method="post">
                    <input type="hidden" name="token" value="<?php echo $session->getToken(); ?>">

                    <div class="form-group">
                        <label for="username">Correo</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            class="form-control<?php echo Functions::has_message('email') ? ' is-invalid' : ''; ?>"
                            placeholder="Correo electrónico"
                            required>
                    </div>

                    <div class="form-group">
                        <input type="submit" name="submit" value="Recuperar" class="btn btn-primary">
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>