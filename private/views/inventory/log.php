<div class="table-responsive">
    <table class="table">
        <thead>
            <tr>
                <th scope="col">Tipo</th>
                <th scope="col">Notas</th>
                <th scope="col" class="w-150p">Fecha</th>
                <th scope="col" class="w-150p">Acciones</th>
            </tr>
        </thead>
        <tbody>
            <?php
                if (!empty($viewmodel)) {
                    foreach ($viewmodel as $log) {
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

                    <td>
                        <?php echo date('d/m/y', strtotime($log['date'])); ?>
                    </td>

                    <td>
                        <a href="<?php echo ROOT_URL; ?>/log/show/<?php echo $log['trans_code']; ?>" class="btn btn-primary w-100 w-md-auto mb-2">Consultar</a>
                    </td>
                </tr>
            <?php
                    }
                }
            ?>
        </tbody>
    </table>
</div>