<div class="content-container" data-type="reverse">
    <div class="content-container-box">
        <h2 class="container-hd">¿Desea revertir la transacción?</h2>

        <p id="content-text">Está por revertir la transacción <span class="text-italic"><?php echo $viewmodel['data']['notes']; ?></span></p>

        <a href="<?php echo ROOT_URL; ?>/log/reverse/<?php echo $viewmodel['data']['id']; ?>" class="btn btn-warning">Revertir</a>
        <a href="#" class="btn btn-primary preventDefault btn-cancel">Cancelar</a>
    </div>
</div>