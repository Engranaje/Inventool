<h1>Lista de usuarios</h1>

<div class="row">
    <div class="table-responsive my-4 pt-2 col-12">
        <table class="table" id="data-table" data-model-singular="usuario" data-model-plural="usuarios">
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
                                    class="btn btn-secondary btn-sqr btn-block">
                                        Desaprobar
                                </a>
                            <?php }else{ ?>
                                <a href="<?php echo ROOT_URL . '/admin/user/' . $user['user_id']; ?>/approve"
                                    class="btn btn-primary btn-sqr btn-block">
                                        Aprobar
                                </a>
                            <?php } ?>
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
