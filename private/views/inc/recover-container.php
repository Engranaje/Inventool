<?php
    $_SESSION['token_time'] = time();
?>

<div class="recover-container" data-type="recover">
    <div class="recover-container-box">
        <h2 class="container-hd">¿Desea recuperar el registro?</h2>

        <p id="recover-text">Está por recuperar el registro <span class="text-italic"></span></p>

        <form action="<?php echo ROOT_URL; ?>/trash/recover" method="post">
            <input type="hidden"
                name="token"
                value="<?php echo $session->getToken(); ?>">

            <input type="hidden"
                name="validate_field"
                value="1">

            <input type="hidden"
                name="code"
                id="recover_code"
                value="">

            <button type="submit" class="btn btn-success">Recuperar</button>
            <a href="#" class="btn btn-primary preventDefault btn-cancel">Cancelar</a>
        </form>
    </div>
</div>