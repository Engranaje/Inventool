<?php
    // Success message
    if ($session->has_message('success')) {
?>

        <div class="lzi alert-msg alert-success text-center" role="alert">
            <p class="d-inline-block m-0">
                <?php echo $session->message('success'); ?>
            </p>
        </div>

<?php
    // Error message
    } elseif ($session->has_message('error')) {
?>

        <div class="lzi alert-msg alert-danger text-center" role="alert">
            <p class="d-inline-block m-0">
                <?php echo $session->message('error'); ?>
            </p>
        </div>

<?php
    }
?>

<!-- Transaction type selection -->
<div class="mb-3">
    <div class="display-md-4 text-center mb-3">Seleccione el tipo de transacción</div>
    <div class="row mx-0 mb-3 justify-content-center">
        <!-- Entry transaction -->
        <div class="menu-option col-12 col-md-6 mb-3 mb-md-0 d-inline-block">
            <a href="<?php echo ROOT_URL; ?>/add" class="btn btn-primary btn-block big-font">Entrada</a>
        </div>

        <!-- Output transaction -->
        <div class="menu-option col-12 col-md-6 d-inline-block">
            <a href="<?php echo ROOT_URL; ?>/remove" class="btn btn-secondary btn-block big-font">Salida</a>
        </div>
    </div>
</div>

<!-- Heading -->
<h1 class="display-md-4">Lista de artículos</h1>

<?php
        $_SESSION['token_time'] = time();
    ?>

    <!-- Form to edit product name -->
    <form action="<?php echo ROOT_URL; ?>/home/update" method="post" id="edit-item-form">
            <input
                type="hidden"
                name="token"
                value="<?php echo $session->getToken(); ?>">

            <input
                type="hidden"
                name="validate_field"
                value="1">

        <!-- Products table -->
        <div class="row">
            <div class="table-responsive my-4 pt-2 col-12">
                <table class="table" id="data-table" data-model-singular="artículo" data-model-plural="artículos">
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
                                <!-- Product code -->
                                <td>
                                    <?php echo $stock['code']; ?>
                                </td>

                                <!-- Product name -->
                                <td>
                                    <p class="m-0 inv_p">
                                        <a href="<?php echo ROOT_URL.'/log/filter/'.$stock['code']; ?>">
                                            <?php echo $stock['description']; ?>
                                        </a>
                                    </p>

                                    <!-- Product name for edit -->
                                    <input
                                        type="text"
                                        name="description"
                                        class="d-none inv_input form-control col-10"
                                        id="inv_<?php echo $stock['code']; ?>"
                                        value="<?php echo $stock['description']; ?>"
                                        disabled>

                                    <!-- Product code for edit -->
                                    <input
                                        type="hidden"
                                        name="code"
                                        class="inv_input"
                                        id="inv_code_<?php echo $stock['code']; ?>"
                                        value="<?php echo $stock['code']; ?>"
                                        disabled>
                                </td>

                                <!-- Product stock -->
                                <td>
                                        <?php
                                            if ($stock['type'] != 'service') {
                                                echo floatval( $stock['stock'] );
                                            } else {
                                                echo '&#8734;';
                                            }
                                        ?>
                                </td>

                                <!-- Actions -->
                                <?php if ($session->is_authorized()) { ?>
                                    <td>
                                        <!-- Edit button -->
                                        <?php if ($stock['type'] != 'kit') { ?>
                                            <!-- Edit button for single and service products -->
                                            <a href="#"
                                            class="show-field btn btn-primary d-block d-md-inline-block btn-sqr w-md-auto mb-2 inv_edit"
                                            data-id="<?php echo $stock['code']; ?>">
                                        <?php } else { ?>
                                            <!-- Edit button for kits -->
                                            <a href="<?php ROOT_URL; ?>/kit/edit/<?php echo $stock['code']; ?>" class="btn btn-primary d-block d-md-inline-block btn-sqr w-md-auto mb-2">
                                        <?php } ?>
                                                <i class="lzi pencil"></i>
                                            </a>

                                        <!-- Update button -->
                                        <a class="btn button btn-primary text-white d-block d-md-inline-block btn-sqr mb-2 d-none-i inv_save"
                                            onclick="event.preventDefault();
                                                    document.getElementById('edit-item-form').submit();">
                                            <i class="lzi check"></i>
                                        </a>

                                        <!-- Delete button -->
                                        <a href="#"
                                            class="btn btn-secondary d-block d-md-inline-block btn-sqr ml-md-3 mb-2 show-content"
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
        </div>
    </form>

<?php include_once PRIVATE_PATH.'/views/inc/delete-container.php'; ?>
<?php include_once PRIVATE_PATH.'/views/inc/add-item-container.php'; ?>

<!-- Reload page after edit -->
<script>
    if ( window.history.replaceState ) {
        window.history.replaceState( null, null, window.location.href );
    }
</script>
