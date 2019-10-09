<div class="content-container" data-type="form">
    <div class="content-container-box">
        <div class="lzi alert alert-danger text-center mx-auto d-none" role="alert">
          <p class="d-inline-block m-0">
            Todos los campos son obligatorios
          </P>
        </div>

        <h2 class="container-hd">Busque el artículo al que desea dar <?php echo ($page == 'add') ? 'entrada' : 'salida'; ?></h2>

        <div class="form-group text-left">
          <label>Descripción</label>
          <select id="code" class="form-control">
            <option value="">-- Seleccionar el artículo --</option>

            <?php
              if (!empty($viewmodel['records'])) {
                  foreach ($viewmodel['records'] as $stock) {
            ?>

              <option value="<?php echo $stock['code']; ?>"
                id="inv_<?php echo $stock['code']; ?>"
                data-description="<?php echo $stock['description']; ?>"
                data-stock="<?php echo $stock['stock']; ?>"
                data-type="<?php echo $stock['type']; ?>">

                <?php echo $stock['description']; ?>  (<?php echo $stock['stock']; ?>)

              </option>

            <?php
                    }
                }
            ?>
          </select>
        </div>

        <div class="form-group text-left">
          <label>Cantidad:</label>
          <input type="number" class="form-control" id="quantity" min="0" value="1">
        </div>

        <a href="3" class="btn btn-primary btn-sqr preventDefault" onClick="selectEntry()">Aceptar</a>
        <a href="#" class="btn btn-secondary btn-sqr preventDefault btn-cancel">Cancelar</a>
    </div>
</div>