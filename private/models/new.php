<?php
class NewModel extends Model
{
    /**
     * Show new view
     */
    public function index()
    {
        $this->query('SELECT * FROM stock WHERE type <> :type');
        $this->bind(':type', 'kit');
        $stock = $this->resultset();

        return $stock;
    }

    /**
     * Create new record
     */
    public function create()
    {
        if (isset($_SESSION['token']) &&
            isset($_POST['token']) &&
            !empty($_SESSION['token']) &&
            !empty($_POST['token'])) {

            if ($_POST['token'] == $_SESSION['token']) {
                $tokenAge = time() - $_SESSION['token_time'];

                // Only continue if time passed in form is greater than 1 seconds and less than 5 minutes
                if ($tokenAge > 1 && $tokenAge < 250) {

                    // Description
                    if (isset($_POST['description']) && !empty($_POST['description'])) {
                        $description = filter_var($_POST['description'], FILTER_SANITIZE_STRING);
                    }

                    // Stock
                    $stock = 0;
                    if (isset($_POST['stock']) && !empty($_POST['stock'])) {
                        $stock = filter_var($_POST['stock'], FILTER_VALIDATE_INT);
                    }

                    // Type
                    if (isset($_POST['type']) && !empty($_POST['type'])) {
                        $type = filter_var($_POST['type'], FILTER_SANITIZE_STRING);
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
                        $this->query('INSERT INTO stock (type, description, stock) VALUES (:type, :description, :stock)');
                        $this->bind(':type', $type);
                        $this->bind(':description', $description);
                        $this->bind(':stock', $stock);
                        $this->execute();
                        $kit_id = $this->lastInsertId();

                        switch ($type) {
                            case 'single':
                            case 'service':{
                                    if ($kit_id > 0) {
                                        Functions::flash('success', 'Registro creado correctamente.');
                                    } else {
                                        Functions::flash('error', 'No se pudo crear el registro. <br /> Por favor, intente de nuevo.');
                                    }
                                    break;
                                }
                            case 'kit':{
                                    if ($kit_id > 0) {

                                        foreach ($components as $key => $component) {
                                            // Insert records
                                            $this->query('INSERT INTO kit_components (kit_id, component_id, quantity) VALUES (:kit_id, :component_id, :quantity)');
                                            $this->bind(':kit_id', $kit_id);
                                            $this->bind(':component_id', $component);
                                            $this->bind(':quantity', $quantity[$key]);
                                            $this->execute();
                                        }
                                        Functions::flash('success', 'El kit ha sido creado correctamente.');
                                    } else {
                                        Functions::flash('error', 'No se pudo crear el kit. <br /> Por favor, intente de nuevo.');
                                    }

                                    break;
                                }
                            default:
                                break;
                        }
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
