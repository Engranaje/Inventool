<?php
    $_SESSION['token_time'] = time();
?>

<div class="col-md-10 col-lg-7 mx-auto">
    <form action="<?php echo ROOT_URL; ?>/new/create" method="post" id="add-form">
        <input type="hidden"
            name="token"
            value="<?php echo $session->getToken(); ?>">

        <div class="form-group">
            <label for="description">Descripción</label>
            <input type="text"
                class="form-control"
                name="description"
                required>
        </div>

        <div class="form-group" id="stock-group">
            <label for="stock">Existencia</label>
            <input type="number"
                name="stock"
                id="stock"
                class="form-control"
                required>
        </div>

        <div class="form-group">
            <label for="type">Tipo de producto</label>
            <div class="form-control d-flex">
                <input type="radio" name="type" id="singular-product" value="single" checked> <label class="ml-1">Terminado</label>
                <input type="radio" name="type" id="kit-component" class="ml-5" value="kit"> <label class="ml-1">Kit</label>
                <input type="radio" name="type" id="service-product" class="ml-5" value="service"> <label class="ml-1">Servicio</label>
            </div>
        </div>

        <div class="form-group d-none" id="kit-components-container">
            <label for="components">Componentes</label>

            <div id="kit-components">
                <div class="d-flex">
                    <select name="components[]" class="form-control flex-4 components" onChange="removeOption(event)" onClick="setOption(event)" disabled required>
                        <option value="null">-- Seleccionar un componente --</option>

                        <?php
                            if (!empty($viewmodel)) {
                                foreach ($viewmodel as $stock) {
                        ?>

                            <option value="<?php echo $stock['code']; ?>">
                                <?php echo $stock['description']; ?>
                            </option>

                        <?php
                                }
                            }
                        ?>
                    </select>

                    <input type="number" name="quantity[]" class="form-control flex-1 components" min="0" placeholder="Cantidad" disabled required>
                </div>
            </div>

                <a href="#" class="btn btn-success mt-3" id="add-kit-component"><i class="lzi add"></i></a>
        </div>

        <div class="form-group">
            <button type="submit" class="btn btn-primary">Añadir</button>
            <a href="<?php echo ROOT_URL; ?>" class="btn btn-danger">Cancelar</a>
        </div>
    </form>
</div>