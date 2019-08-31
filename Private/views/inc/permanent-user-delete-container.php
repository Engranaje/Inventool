<?php
    $_SESSION['token_time'] = time();
?>

<div class="content-container" data-type="permanent-delete">
    <div class="content-container-box">
        <h2 class="container-hd">¿Desea eliminar <span class="record-type">el registro</span>?</h2>

        <p class="m-0" id="delete-text">Está por eliminar permanentemente <span class="record-type">el registro</span> <span class="text-italic"></span></p>

        <p>Esta acción no se podrá deshacer</p>

        <form action="<?php echo ROOT_URL; ?>/trash/delete" method="post">
            <input type="hidden"
                name="token"
                value="<?php echo $session->getToken(); ?>">

            <input type="hidden"
                name="validate_field"
                value="1">

            <input type="hidden"
                name="code"
                id="delete_code"
                value="">

            <div class="form-group col-md-6 mx-auto">
                <label for="username">Ingrese su nombre de usuario</label>
                <input type="text"
                    name="username"
                    id="username"
                    class="form-control">
            </div>

            <button type="submit" class="btn btn-warning">Eliminar</button>
            <a href="#" class="btn btn-primary preventDefault btn-cancel">Cancelar</a>
        </form>
    </div>
</div>