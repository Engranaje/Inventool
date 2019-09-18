<h1>Lista de usuarios</h1>

<div class="table-responsive mt-4">
    <table class="table">
        <thead>
            <tr>
                <th scope="col">Nombre</th>
                <th scope="col">Usuario</th>
                <th scope="col">Rol</th>
                <th scope="col">Registro</th>
                <th scope="col">Acciones</th>
            </tr>
        </thead>
        <tbody>
            <?php
                if (!empty($viewmodel)) {
                    foreach ($viewmodel as $user) {
            ?>
                <tr>
                    <td>
                        <a
                            href="<?php echo ROOT_URL . '/admin/user/' . $user['user_id']; ?>/edit">
                            <?php echo $user['user_name']; ?>
                        </a>
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
                        <!-- Disapprove user button -->
                        <?php if($user['status'] == '1'){ ?>
                            <a href="<?php echo ROOT_URL . '/admin/user/' . $user['user_id']; ?>/disapprove"
                                class="btn btn-danger btn-block">
                                    Desaprobar
                            </a>
                        <?php }else{ ?>
                            <a href="<?php echo ROOT_URL . '/admin/user/' . $user['user_id']; ?>/approve"
                                class="btn btn-success btn-block">
                                    Aprobar
                            </a>
                        <?php } ?>
                    </td>
                </tr>
            <?php
                    }
                }else{
            ?>

                <tr>
                    <td>No hay usuarios registrados</td>
                </tr>

            <?php
                }
            ?>
        </tbody>
    </table>
</div>