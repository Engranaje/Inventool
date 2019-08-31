<div class="row">
    <div class="col-md-12">
        <?php
            if (Functions::has_message('success')) {
        ?>

                <div class="lzi alert-msg alert-success text-center mx-auto mt-3 mb-0" role="alert">
                    <div class="d-inline-block m-0">
                        <p class="mb-0">
                            <?php echo Functions::message('success'); ?>
                        </p>
                    </div>
                </div>

        <?php
            }else if(Functions::has_message(['error', 'username', 'password'])){
        ?>
            <div class="lzi alert-msg alert-danger text-center mx-auto mt-3 mb-0" role="alert">
                <div class="d-inline-block m-0">
                    <p class="mb-0">
                        <?php echo Functions::message('error'); ?>
                    </p>
                </div>
            </div>
        <?php } ?>
    </div>
</div>

<div class="row center-box f-row align-items-center">
    <div class="col-md-4 text-center">
        <a href="<?php echo ROOT_URL; ?>/admin/users" class="text-dark d-block"><i class="lzi user big-icon"></i></a>
        Lista de usuarios
    </div>

    <div class="col-md-4 text-center">
        <a href="<?php echo ROOT_URL; ?>/admin/user/create" class="text-dark d-block"><i class="lzi iconplus big-icon"></i></a>
        Crear usuario
    </div>

    <div class="col-md-4 text-center mt-5 mt-md-0">
        <a href="<?php echo ROOT_URL; ?>/admin/users/trash" class="text-dark d-block"><i class="lzi trashcan big-icon"></i></a>
        Ver usuarios eliminados
    </div>
</div>