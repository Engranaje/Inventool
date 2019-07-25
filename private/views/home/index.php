<?php
    if ($session->hasMessage('success') !== null) {
?>

        <div class="lzi alert alert-success text-center mx-auto" role="alert">
            <p class="d-inline-block m-0">
                <?php echo $session->message('success'); ?>
            </p>
        </div>

<?php
    }else if($session->hasMessage('error') !== null){
?>

        <div class="lzi alert alert-danger text-center mx-auto" role="alert">
            <p class="d-inline-block m-0">
                <?php echo $session->message('error'); ?>
            </p>
        </div>

<?php
    }
?>

<div class="row mx-0 justify-content-center">
    <div class="menu-option m-2">
        <a href="<?php echo ROOT_URL; ?>/add" class="btn btn-primary">Entrada</a>
    </div>

    <div class="menu-option m-2">
        <a href="<?php echo ROOT_URL; ?>/remove" class="btn btn-danger">Salida</a>
    </div>
</div>

<input
    type="search"
    name="search"
    id="search"
    class="form-control col-md-6 text-primary m-auto"
    placeholder="Buscar...">

<div class="table-responsive mt-4">
    <?php
        $_SESSION['token_time'] = time();
    ?>

    <form action="<?php echo ROOT_URL; ?>/home/update" method="post">
        <input
            type="hidden"
            name="token"
            value="<?php echo $session->getToken(); ?>">

        <input
            type="hidden"
            name="validate_field"
            value="1">

        <table class="table">
            <thead>
                <tr>
                    <th scope="col">Código</th>
                    <th scope="col">Descripción</th>
                    <th scope="col">Cantidad</th>
                    <th scope="col" class="w-150p">Acciones</th>
                </tr>
            </thead>
            <tbody>
                <?php
                    if (!empty($viewmodel)) {
                        foreach ($viewmodel as $stock) {
                ?>
                    <tr>
                        <td>
                            <?php echo $stock['code']; ?>
                        </td>

                        <td>
                            <p class="m-0 inv_p">
                                <a href="<?php echo ROOT_URL; ?>/log/filter/<?php echo $stock['code']; ?>">
                                    <?php echo $stock['description']; ?>
                                </a>
                            </p>

                            <input
                                type="text"
                                name="description"
                                class="d-none inv_input form-control"
                                id="inv_<?php echo $stock['code']; ?>"
                                value="<?php echo $stock['description']; ?>"
                                disabled>

                            <input
                                type="hidden"
                                name="code"
                                class="inv_input"
                                id="inv_code_<?php echo $stock['code']; ?>"
                                value="<?php echo $stock['code']; ?>"
                                disabled>
                        </td>

                        <td>
                            <?php
                                if($stock['type'] != 'service'){
                                    echo $stock['stock'];
                                } else {
                                    echo '&#8734;';
                                }
                            ?>

                        </td>

                        <td>
                            <a href="#"
                                class="show-field btn btn-warning w-md-auto mb-2 inv_edit"
                                data-id="<?php echo $stock['code']; ?>">
                                <i class="lzi pencil"></i>
                            </a>

                            <button
                                type="submit"
                                class="btn btn-success mb-2 d-none inv_save">
                                <i class="lzi check"></i>
                            </button>

                            <a href="#"
                                class="btn btn-danger mb-2 show-content"
                                data-text="<?php echo $stock['description']; ?>">
                                <i class="lzi trashcan-open"></i>
                            </a>
                        </td>
                    </tr>
                <?php
                        }
                    }else{
                ?>

                    <tr>
                        <td>Aún no ha agregado registros</td>
                    </tr>

                <?php
                    }
                ?>
            </tbody>
        </table>
    </form>
</div>

<?php include_once PRIVATE_PATH . '/views/inc/delete-container.php'; ?>

<script>
    if ( window.history.replaceState ) {
        window.history.replaceState( null, null, window.location.href );
    }
</script>

<?php // TODO: Al dar clic sobre kit, preguntar si se quieren ver transacciones o si se quieren ver componentes para modificar ?>