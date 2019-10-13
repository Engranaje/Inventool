<div class="content-container" data-type="notify">
    <div class="content-container-box">
        <h2 class="container-hd">¿Desea recibir notificaciones de existencia del artículo?</h2>

        <p id="delete-text">Introduzca la cantidad desde la cual desea recibir notificaciones de existencia del artículo <span class="text-italic"></span></p>

        <form action="<?php echo ROOT_URL . '/admin/notifications/notify'; ?>" method="post">
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

            <div class="form-group justify-center">
              <input type="text" name="notify" class="form-control col-sm-6 m-auto" data-input-type="number" min="1" autofocus>
            </div>

            <button type="submit" class="btn btn-sqr btn-primary">Notificar</button>
            <a href="#" class="btn btn-secondary btn-sqr preventDefault btn-cancel">Cancelar</a>
        </form>
    </div>
</div>