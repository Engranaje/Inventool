<?php
    $_SESSION['token_time'] = time();
?>

<?php
    /**
     * Create array with codes to remove from select list to prevent duplicate values.
     */
    $codes = array_map(function($code) {
        return $code['code'];
    }, $viewmodel['components']);
?>

<div class="col-md-10 col-lg-7 mx-auto">
    <form action="<?php echo ROOT_URL; ?>/kit/update/<?php echo $viewmodel['kit']['code']; ?>" method="post" id="add-form">
        <input type="hidden"
            name="token"
            value="<?php echo $session->getToken(); ?>">

        <div class="form-group">
            <label for="description">Descripción</label>
            <input type="text"
                class="form-control"
                name="description"
                value="<?php echo $viewmodel['kit']['description']; ?>"
                required>
        </div>

        <div class="form-group" id="kit-components-container">
            <label for="components">Componentes</label>

            <div id="kit-components">
                <?php
                    if (!empty($viewmodel['components'])) {
                        foreach ($viewmodel['components'] as $key => $component) {
                ?>
                    <div class="d-flex">
                        <select name="components[]" class="form-control flex-4 components select-box" onChange="removeOption(event)" onClick="setOption(event)" required>
                            <?php
                                if (!empty($viewmodel['stock'])) {
                                    foreach ($viewmodel['stock'] as $stock) {
                            ?>

                                <?php if ($component['code'] == $stock['code']) { ?>

                                    <option value="<?php echo $stock['code']; ?>" selected>
                                        <?php echo $stock['description']; ?>
                                    </option>

                                <?php }else if (!in_array($stock['code'], $codes)){ ?>

                                    <option value="<?php echo $stock['code']; ?>">
                                        <?php echo $stock['description']; ?>
                                    </option>

                                <?php } ?>

                            <?php
                                    }
                                }
                            ?>
                        </select>

                        <input type="text" data-input-type="number" name="quantity[]" class="form-control flex-1 components" min="0" placeholder="Cantidad" value="<?php echo $component['quantity']; ?>" required>

                        <?php
                            if($key >= 1){
                                echo '<a href="#" class="btn delete-component" onClick="deleteComponent(event)"><i class="lzi delete lzi-danger"></i></a>';
                            }
                        ?>
                    </div>
                <?php
                        }
                    }
                ?>
            </div>

                <a href="#" class="btn btn-primary btn-sqr mt-3" id="add-kit-component"><i class="lzi add"></i></a>
        </div>

        <div class="form-group">
            <button type="submit" class="btn btn-primary btn-sqr">Guardar</button>
            <a href="<?php echo ROOT_URL; ?>" class="btn btn-secondary btn-sqr">Cancelar</a>
        </div>
    </form>
</div>