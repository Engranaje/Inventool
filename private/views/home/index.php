<?php
    if ($session->has_message('success')) {
?>

        <div class="lzi alert-msg alert-success text-center mx-auto" role="alert">
            <p class="d-inline-block m-0">
                <?php echo $session->message('success'); ?>
            </p>
        </div>

<?php
    } elseif ($session->has_message('error')) {
?>

        <div class="lzi alert-msg alert-danger text-center mx-auto" role="alert">
            <p class="d-inline-block m-0">
                <?php echo $session->message('error'); ?>
            </p>
        </div>

<?php
    }
?>

<div class="mb-3">
    <div class="display-4 text-center mb-3">Seleccione el tipo de transacción</div>
    <div class="row mx-0 mb-3 justify-content-center">
        <div class="menu-option pl-md-0 col-12 col-md-6 mb-3 mb-md-0 d-inline-block">
            <a href="<?php echo ROOT_URL; ?>/add" class="btn btn-primary btn-block">Entrada</a>
        </div>

        <div class="menu-option pr-md-0 col-12 col-md-6 d-inline-block">
            <a href="<?php echo ROOT_URL; ?>/remove" class="btn btn-danger btn-block">Salida</a>
        </div>
    </div>
</div>

<h1>Lista de artículos</h1>

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

        <div class="col-md-12 mb-4 py-1">
            <table class="table" id="data-table">
                <thead>
                    <tr>
                        <th scope="col">Código</th>
                        <th scope="col">Descripción</th>
                        <th scope="col">Cantidad</th>
                        <?php if ($session->is_authorized()) { ?>
                            <th scope="col" class="w-150p">Acciones</th>
                        <?php  } ?>
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
                                    <a href="<?php echo ROOT_URL.'/log/filter/'.$stock['code']; ?>">
                                        <?php echo $stock['description']; ?>
                                    </a>
                                </p>

                                <input
                                    type="text"
                                    name="description"
                                    class="d-none inv_input form-control col-md-10"
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
                                    if ($stock['type'] != 'service') {
                                        echo $stock['stock'];
                                    } else {
                                        echo '&#8734;';
                                    }
                                ?>

                            </td>

                            <!-- Actions -->
                            <?php if ($session->is_authorized()) { ?>
                                <td>
                                    <?php if ($stock['type'] != 'kit') { ?>
                                        <a href="#"
                                        class="show-field btn btn-warning w-md-auto mb-2 inv_edit"
                                        data-id="<?php echo $stock['code']; ?>">
                                    <?php } else { ?>
                                        <a href="<?php ROOT_URL; ?>/kit/edit/<?php echo $stock['code']; ?>" class="btn btn-warning w-md-auto mb-2">
                                    <?php } ?>
                                            <i class="lzi pencil"></i>
                                        </a>

                                    <button
                                        type="submit"
                                        class="btn btn-success mb-2 d-none inv_save">
                                        <i class="lzi check"></i>
                                    </button>

                                    <a href="#"
                                        class="btn btn-danger mb-2 show-content"
                                        data-type="delete"
                                        data-text="<?php echo $stock['description']; ?>"
                                        data-id="<?php echo $stock['code']; ?>">
                                        <i class="lzi trashcan-open"></i>
                                    </a>
                                </td>
                            <?php } ?>
                        </tr>
                    <?php
                            }
                        }
                    ?>
                </tbody>
            </table>
        </div>
    </form>
</div>

<?php include_once PRIVATE_PATH.'/views/inc/delete-container.php'; ?>

<script>
    if ( window.history.replaceState ) {
        window.history.replaceState( null, null, window.location.href );
    }
</script>