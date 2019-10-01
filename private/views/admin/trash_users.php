<h1>Lista de usuarios eliminados</h1>

<div class="table-responsive mt-4">
    <div class="col-md-12 mb-4 py-1">
        <table class="table" id="data-table" data-model-singular="usuario" data-model-plural="usuarios">
            <thead>
                <tr>
                    <th scope="col">Nombre</th>
                    <th scope="col">Usuario</th>
                    <th scope="col">Rol</th>
                    <th scope="col">Registro</th>
                    <th scope="col" class="w-150p">Acciones</th>
                </tr>
            </thead>
            <tbody>
                <?php
                    if (!empty($viewmodel)) {
                        foreach ($viewmodel as $user) {
                ?>
                    <tr>
                        <td>
                            <?php echo $user['user_name']; ?>
                        </td>

                        <td>
                        <?php echo $user['username']; ?>
                        </td>

                        <td>
                            <?php echo $user['role']; ?>
                        </td>

                        <td>
                            <?php echo Functions::friendlyDate($user['created_at']); ?>
                        </td>

                        <td>
                            <a href="#"
                                class="show-recover btn btn-success w-100 w-md-auto mb-2 inv_edit"
                                data-id="<?php echo $user['user_id']; ?>"
                                data-type="recover"
                                data-record-type="el usuario"
                                data-text="<?php echo $user['user_name']; ?>"
                                data-action="<?php echo ROOT_URL . '/admin/user/' . $user['user_id']; ?>/recover">
                                <i class="lzi check"></i>
                            </a>

                            <a href="#"
                                class="btn btn-danger w-100 w-md-auto mb-2 show-content"
                                data-id="<?php echo $user['user_id']; ?>"
                                data-type="permanent-delete"
                                data-record-type="el usuario"
                                data-text="<?php echo $user['user_name']; ?>"
                                data-action="<?php echo ROOT_URL . '/admin/user/' . $user['user_id']; ?>/destroy">
                                <i class="lzi trashcan-open"></i>
                            </a>
                        </td>
                    </tr>
                <?php
                        }
                    }
                ?>
            </tbody>
        </table>
    </div>
</div>

<?php include_once PRIVATE_PATH . '/views/inc/recover-container.php'; ?>
<?php include_once PRIVATE_PATH . '/views/inc/permanent-delete-container.php'; ?>
