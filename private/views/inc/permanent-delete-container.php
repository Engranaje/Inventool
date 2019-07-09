<?php
    $_SESSION['token_time'] = time();
?>

<div id="content-container">
    <div id="content-container-box">
        <h2 class="container-hd">¿Desea eliminar el registro?</h2>

        <p class="m-0" id="delete-text">Está por eliminar permanentemente el registro <span class="text-italic"></span></p>

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

            <button type="submit" class="btn btn-warning">Eliminar</button>
            <a href="#" class="btn btn-primary preventDefault" id="btn-cancel">Cancelar</a>
        </form>
    </div>
</div>