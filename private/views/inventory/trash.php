<div class="table-responsive">
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
                            <?php echo $stock['description']; ?>
                        </p>

                        <input type="text"
                            name="description"
                            class="d-none inv_input form-control"
                            id="inv_<?php echo $stock['code']; ?>"
                            value="<?php echo $stock['description']; ?>"
                            disabled>

                        <input type="hidden"
                            name="code"
                            class="inv_input"
                            id="inv_code_<?php echo $stock['code']; ?>"
                            value="<?php echo $stock['code']; ?>"
                            disabled>
                    </td>

                    <td>
                        <?php echo $stock['stock']; ?>
                    </td>

                    <td>
                        <a href="#"
                            class="show-recover btn btn-success w-100 w-md-auto mb-2 inv_edit"
                            data-id="<?php echo $stock['code']; ?>"
                            data-text="<?php echo $stock['description']; ?>">
                            <i class="lzi check"></i>
                        </a>

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
                    <td>La papelera está vacía</td>
                </tr>

            <?php
                }
            ?>
        </tbody>
    </table>
</div>

<?php include_once PRIVATE_PATH . '/views/inc/recover-container.php'; ?>
<?php include_once PRIVATE_PATH . '/views/inc/permanent-delete-container.php'; ?>