<?php if(isset($viewmodel['filter'])){ ?>
    <!-- Only show amount in filter view -->
    <h1 class="d-none print">Reporte de <?php echo $viewmodel['record']; ?></h1>
<?php }else{ ?>
    <h1 class="d-none print">Reporte general</h1>
<?php } ?>

<div class="table-responsive">
    <table class="table">
        <thead>
            <tr>
                <th scope="col">Tipo</th>

                <th scope="col">Notas</th>

                <?php if(isset($viewmodel['filter'])){ ?>
                    <!-- Only show amount in filter view -->
                    <th scope="col">Anterior</th>

                    <th scope="col">Cantidad</th>
                <?php } ?>

                <th scope="col">Fecha</th>

                <th scope="col" class="<?php echo $action == 'index' ? 'w-150p ' : ''  ?>noprint">Acciones</th>
            </tr>
        </thead>
        <tbody>
            <?php
                if (!empty($viewmodel['log'])) {
                    foreach ($viewmodel['log'] as $log) {
            ?>
                <tr>
                    <td>
                        <?php echo ($log['type'] == '1') ? 'Entrada' : 'Salida'; ?>
                    </td>

                    <td>
                        <p class="m-0 inv_p">
                            <?php echo $log['notes']; ?>
                        </p>
                    </td>

                    <?php if(isset($viewmodel['filter'])){ ?>
                        <!-- Only show amount in filter view -->
                        <td>
                            <?php echo $log['previous']; ?>
                        </td>

                        <td>
                            <?php echo $log['amount']; ?>
                        </td>
                    <?php } ?>

                    <td>
                        <?php echo date('d/m/y', strtotime($log['date'])); ?>
                    </td>

                    <td class="noprint">
                        <a href="<?php echo ROOT_URL; ?>/log/show/<?php echo $log['trans_code']; ?>" class="btn btn-primary w-100 w-md-auto mb-2">Consultar</a>
                    </td>
                </tr>
            <?php
                    }
                }else{
            ?>

                <tr>
                    <td>Aún no hay actividades registradas</td>
                </tr>

            <?php
                }
            ?>
        </tbody>
    </table>
</div>