<?php
class KitModel extends Model
{
    /**
     * Show edit kit view
     */
    public function edit($id)
    {
        $this->query('SELECT * FROM stock WHERE code = :code');
        $this->bind(':code', $id);
        $kit = $this->singleRow();

        $this->query('SELECT * FROM stock WHERE type <> :type');
        $this->bind(':type', 'kit');
        $stock = $this->resultset();

        // Search kit components
        $this->query('SELECT stock.*, kit_components.* FROM stock
                LEFT JOIN kit_components
                    ON kit_components.component_id = stock.code
                WHERE kit_id = :code');
        $this->bind(':code', $id);
        $components = $this->resultset();

        return [
            'kit' => $kit,
            'stock' => $stock,
            'components' => $components
        ];
    }

    /**
     * Create new record
     */
    public function update($id)
    {
        if (isset($_SESSION['token']) &&
            isset($_POST['token']) &&
            !empty($_SESSION['token']) &&
            !empty($_POST['token'])) {

            if ($_POST['token'] === $_SESSION['token']) {
                $tokenAge = time() - $_SESSION['token_time'];

                // Only continue if time passed in form is greater than 1 seconds and less than 5 minutes
                if ($tokenAge > 1 && $tokenAge < 250) {

                    // Description
                    if (isset($_POST['description']) && !empty($_POST['description'])) {
                        $description = filter_var($_POST['description'], FILTER_SANITIZE_STRING);
                    }

                    // Components
                    if (isset($_POST['components']) && !empty($_POST['components'])) {
                        $components = filter_var_array($_POST['components'], FILTER_SANITIZE_STRING);

                        // Search for stock of every component to calculate kit stock
                        $components_stock = [];

                        try {
                            foreach ($components as $component) {
                                $this->query('SELECT stock, type FROM stock WHERE code = :code');
                                $this->bind(':code', $component);
                                $result = $this->singleRow();

                                // Ignore services for kit stock calculation
                                if ($result['type'] != 'service') {
                                    array_push($components_stock, $result['stock']);
                                }
                            }
                        } catch (\Exception $e) {
                            Functions::flash('error', 'Hubo un error buscando los componentes.');
                            header('Location:' . ROOT_URL);
                        }
                    }

                    // Quantity
                    if (isset($_POST['quantity']) && !empty($_POST['quantity'])) {
                        $quantity = filter_var_array($_POST['quantity'], FILTER_SANITIZE_STRING);

                        // Calculate component quantity to set kit stock a min result
                        $components_quantity = [];

                        foreach ($components_stock as $key => $value) {
                            // Result = rounded down value of component stock divided by inserted quantity
                            $result = floor((int) $value / $quantity[$key]);
                            array_push($components_quantity, $result);
                        }

                        $stock = min($components_quantity);
                    }

                    try {
                        // Delete kit components
                        $this->query('DELETE FROM kit_components WHERE kit_id = :id');
                        $this->bind(':id', $id);
                        $this->execute();

                        // Insert updated kit components
                        foreach ($components as $key => $component) {
                            $this->query('INSERT INTO kit_components (kit_id, component_id, quantity) VALUES (:kit_id, :component_id, :quantity)');
                            $this->bind(':kit_id', $id);
                            $this->bind(':component_id', $component);
                            $this->bind(':quantity', $quantity[$key]);
                            $this->execute();
                        }

                        // Update kit stock
                        $this->query('UPDATE stock set description = :description, stock = :stock WHERE code = :code');
                        $this->bind(':description', $description);
                        $this->bind(':stock', $stock);
                        $this->bind(':code', $id);
                        $this->execute();

                        Functions::flash('success', 'El kit ha sido actualizado correctamente.');

                    } catch (\Exception $e) {
                        Functions::flash('error', 'Hubo un error intentando crear el registro.');
                    }
                } else {
                    Functions::flash('error', 'Se ha agotado el tiempo de espera. <br /> Por favor, recargue e intente de nuevo.');
                }
            } else {
                Functions::flash('error', 'Hubo un error. <br /> Por favor, recargue e intente de nuevo.');
            }
        } else {
            Functions::flash('error', 'Hubo un error. <br /> Por favor, recargue e intente de nuevo.');
        }

        header('Location:' . ROOT_URL);
    }
}
