<?php
    $_SESSION['token_time'] = time();
?>

<div class="recover-container" data-type="recover">
    <div class="recover-container-box">
        <h2 class="container-hd">¿Desea recuperar <span class="record-type">el registro</span>?</h2>

        <p id="recover-text">Está por recuperar <span class="record-type">el registro</span> <span class="text-italic"></span></p>

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

            <button type="submit" class="btn btn-primary btn-sqr">Recuperar</button>
            <a href="#" class="btn btn-secondary btn-sqr preventDefault btn-cancel">Cancelar</a>
        </form>
    </div>
</div>