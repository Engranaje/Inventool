<?php
$_SESSION['token_time'] = time();
$_SESSION['submitted'] = false;
$types = [
    'name',
    'username',
    'email',
    'password',
    'confirm_password',
    'error',
];
$message = array_fill_keys($types, false);
?>

<div class="flex-column justify-content-center">
    <h2 class="text-center">Registrarse</h2>

    <div class="d-flex justify-content-center">
        <div class="card col-md-6 mb-3">
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
                        <label for="name">Nombre</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            class="form-control<?php echo $message['name'] ? ' is-invalid' : ''; ?>"
                            placeholder="Nombre completo"
                            value="<?php echo $viewmodel['name']; ?>"
                            required>
                    </div>

                    <div class="form-group">
                        <label for="username">Usuario</label>
                        <input
                            type="text"
                            name="username"
                            id="username"
                            class="form-control<?php echo $message['username'] ? ' is-invalid' : ''; ?>"
                            placeholder="Nombre de usuario"
                            value="<?php echo $viewmodel['username']; ?>"
                            required>
                    </div>

                    <div class="form-group">
                        <label for="email">Correo</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            class="form-control<?php echo $message['email'] ? ' is-invalid' : ''; ?>"
                            placeholder="Correo electrónico"
                            value="<?php echo $viewmodel['email']; ?>"
                            required>
                    </div>

                    <div class="form-group">
                        <label for="password">Contraseña</label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            class="form-control<?php echo $message['password'] ? ' is-invalid' : ''; ?>"
                            placeholder="Contraseña"
                            required>
                    </div>

                    <div class="form-group">
                        <label for="confirm_password">Confirmar contraseña</label>
                        <input
                            type="password"
                            name="confirm_password"
                            id="confirm_password"
                            class="form-control<?php echo $message['confirm_password'] ? ' is-invalid' : ''; ?>"
                            placeholder="Confirmar contraseña"
                            required>
                    </div>

                    <div class="form-group">
                        <input
                            type="submit"
                            name="submit"
                            value="Registrarse"
                            class="btn btn-primary">
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>