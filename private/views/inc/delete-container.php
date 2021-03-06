<?php
    $_SESSION['token_time'] = time();
?>

<div class="content-container" data-type="delete">
    <div class="content-container-box">
        <h2 class="container-hd">¿Desea eliminar <span class="record-type">el registro</span>?</h2>

        <p id="delete-text">Está por eliminar <span class="record-type">el registro</span> <span class="text-italic"></span></p>

        <form action="<?php echo ROOT_URL; ?>/home/delete" method="post">
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

            <button type="submit" class="btn btn-sqr btn-primary">Eliminar</button>
            <a href="#" class="btn btn-secondary btn-sqr preventDefault btn-cancel">Cancelar</a>
        </form>
    </div>
</div>