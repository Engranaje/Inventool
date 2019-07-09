<div id="content-container">
    <div id="content-container-box">
        <div class="lzi alert alert-danger d-none" role="alert">
          Todos los campos son obligatorios
        </div>

        <h2 class="container-hd">Busque el artículo al que desea dar entrada</h2>

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
                data-stock="<?php echo $stock['stock']; ?>">

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
          <input type="number" class="form-control" id="quantity">
        </div>

        <a href="3" class="btn btn-primary preventDefault" onClick="selectEntry()">Aceptar</a>
        <a href="#" class="btn btn-danger preventDefault" id="btn-cancel">Cancelar</a>
    </div>
</div>