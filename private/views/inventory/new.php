<?php
    $_SESSION['token_time'] = time();
?>

<div class="col-md-6 mx-auto">
    <form action="<?php echo ROOT_URL; ?>/new/create" method="post" id="add-form">
        <input type="hidden"
            name="token"
            value="<?php echo $session->getToken(); ?>">

        <div class="form-group">
            <label for="description">Descripción</label>
            <input type="text"
                class="form-control"
                name="description"
                required>
        </div>

        <div class="form-group">
            <label for="stock">Existencia</label>
            <input type="number"
                name="stock"
                class="form-control"
                required>
        </div>

        <div class="form-group">
            <button type="submit" class="btn btn-primary">Añadir</button>
            <a href="<?php echo ROOT_URL; ?>" class="btn btn-danger">Cancelar</a>
        </div>
    </form>
</div>