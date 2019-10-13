<div class="content-container" data-type="new-item" id="add-new-item-container">
    <div class="content-container-box new-item-container">
        <?php
            $_SESSION['token_time'] = time();
        ?>

        <!-- Heading -->
        <h1 class="text-center mb-4">Nuevo artículo</h1>

        <div class="col-10 mx-auto text-left">
            <form action="<?php echo ROOT_URL; ?>/new/create" method="post" id="add-form">
                <input type="hidden"
                    name="token"
                    value="<?php echo $session->getToken(); ?>">

                <!-- Product name -->
                <div class="form-group">
                    <label for="description">Nombre</label>
                    <input type="text"
                        class="form-control"
                        name="name"
                        placeholder="Nombre de producto"
                        required>
                </div>

                <!-- Product stock -->
                <div class="form-group" id="stock-group">
                    <label for="stock">Existencia</label>
                    <input type="text"
                        data-input-type="number"
                        name="stock"
                        id="stock"
                        class="form-control"
                        placeholder="Existencia"
                        required>
                </div>

                <!-- Product type -->
                <div class="form-group">
                    <label for="type">Tipo de producto</label>
                    <div class="form-control d-block d-md-flex flex-column flex-md-row" id="product_type_box">
                        <div class="d-flex h-22p">
                            <input type="radio" name="type" id="singular-product" value="single" checked> <label class="ml-1">Terminado</label>
                        </div>

                        <div class="d-flex h-22p mt-3 mt-md-0">
                            <input type="radio" name="type" id="kit-component" class="ml-md-5" value="kit"> <label class="ml-1">Kit</label>
                        </div>

                        <div class="d-flex h-22p mt-3 mt-md-0">
                            <input type="radio" name="type" id="service-product" class="ml-md-5" value="service"> <label class="ml-1">Servicio</label>
                        </div>
                    </div>
                </div>

                <!-- Kit components -->
                <div class="form-group d-none" id="kit-components-container">
                    <label for="components">Componentes</label>

                    <div id="kit-components">
                        <div class="d-flex">
                            <!-- Components -->
                            <select name="components[]" class="form-control select-box flex-4 components" onChange="removeOption(event)" onClick="setOption(event)" disabled required>
                                <option value="null" disabled selected>-- Seleccionar un componente --</option>

                                <?php
                                    if (!empty($viewmodel['stock'])) {
                                        foreach ($viewmodel['stock'] as $stock) {
                                ?>

                                    <option value="<?php echo $stock['code']; ?>">
                                        <?php echo $stock['description']; ?>
                                    </option>

                                <?php
                                        }
                                    }
                                ?>
                            </select>

                            <!-- Quantity -->
                            <input type="text" name="quantity[]" data-input-type="number" class="form-control flex-1 components" min="0" placeholder="Cantidad" disabled required>
                        </div>
                    </div>

                    <!-- Add another component -->
                    <a href="#" class="btn btn-primary btn-sqr mt-3" id="add-kit-component"><i class="lzi add"></i></a>
                </div>

                <div class="form-group">
                    <button type="submit" class="btn btn-primary btn-sqr">Añadir</button>
                    <a href="<?php echo ROOT_URL; ?>" class="btn btn-secondary btn-sqr">Cancelar</a>
                </div>
            </form>
        </div>
    </div>
</div>