<h1 class="m-0 mb-3<?php echo ($viewmodel['data']['type'] == '1') ? ' text-success' : ' text-danger'; ?>">
    <?php echo ($viewmodel['data']['type'] == '1') ? 'Entrada' : 'Salida'; ?>
</h1>

<div class="form-group row">
    <div class="col-md-3 pr-md-0">
        <label for="date">Fecha</label>
        <label class="form-control"><?php echo date('d/m/Y', strtotime($viewmodel['data']['date'])); ?></label>
    </div>

    <div class="col-md-9">
        <label for="notes">Notas</label>
        <label class="form-control noresize" required><?php echo $viewmodel['data']['notes']; ?></label>
    </div>
</div>

<div class="form-group">
    <a href="<?php echo ROOT_URL; ?>/log/reverse/<?php echo $viewmodel['data']['id']; ?>" class="btn btn-warning">Revertir</a>
</div>

<div class="table-responsive fh-table">
    <table class="table">
    <thead>
        <tr>
        <th scope="col">Código</th>
        <th scope="col">Descripción</th>
        <th scope="col" class="w-150p">cantidad</th>
        </tr>
    </thead>

    <tbody>
        <?php
            if (!empty($viewmodel['transaction'])) {
                foreach ($viewmodel['transaction'] as $transaction) {
        ?>
            <tr>
                <td>
                    <?php echo $transaction['stock_code']; ?>
                </td>

                <td>
                    <?php echo $transaction['description']; ?>
                </td>

                <td>
                    <?php echo $transaction['amount']; ?>
                </td>
            </tr>
        <?php
                }
            }
        ?>
    </tbody>
    </table>
</div>