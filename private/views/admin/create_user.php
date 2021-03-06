<?php
    $_SESSION['token_time'] = time();
    $_SESSION['submitted'] = false;
    $name = isset($viewmodel['data']) ? $viewmodel['data']['name'] : '';
    $username = isset($viewmodel['data']) ? $viewmodel['data']['username'] : '';
    $email = isset($viewmodel['data']) ? $viewmodel['data']['email'] : '';
    $roles = isset($viewmodel['roles']) ? $viewmodel['roles'] : '';
    $types = [
        'name',
        'username',
        'email',
        'role_id',
        'error',
    ];
    $message = array_fill_keys($types, false);
?>
<div class="row justify-content-center">
    <div class="col-md-6">

    <?php if (has_message($types)) { ?>

        <div class="lzi alert-msg alert-danger text-center mx-auto mt-3 mb-0" role="alert">
            <div class="d-inline-block m-0">
                <?php
                    foreach ($types as $key => $type) {
                        if (has_message($type)) {
                            $message[$type] = has_message($type);
                ?>
                    <p class="m-3">
                        <?php echo message($type); ?>
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

        <h1 class="text-center mb-4">Nuevo usuario</h1>

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
                    value="<?php echo $name; ?>"
                    autofocus
                    required>
            </div>

            <div class="form-group">
                <label for="username">Nombre de usuario</label>
                <input
                    type="text"
                    name="username"
                    id="username"
                    class="form-control<?php echo $message['username'] ? ' is-invalid' : ''; ?>"
                    placeholder="Nombre de usuario"
                    value="<?php echo $username; ?>"
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
                    value="<?php echo $email; ?>"
                    required>
            </div>

            <div class="form-group">
                <label for="role_id">Rol</label>
                <select name="role_id" id="role_id" class="form-control select-box<?php echo $message['role_id'] ? ' is-invalid' : ''; ?>" required>
                    <option value="">-- Seleccione un rol --</option>
                    <?php
                        foreach ($roles as $role) {
                    ?>
                        <option value="<?php echo $role['id']; ?>">
                            <?php echo $role['name']; ?>
                        </option>
                    <?php
                        }
                    ?>
                </select>
            </div>

            <div class="mt-4 row col-md-12 justify-content-between p-0 m-0">
                <input type="submit" value="Crear" class="btn btn-primary btn-sqr btn-block">
            </div>
        </form>
    </div>
</div>
