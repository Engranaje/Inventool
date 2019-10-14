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

                    // Name
                    if (isset($_POST['name']) && !empty($_POST['name'])) {
                        $name = filter_var($_POST['name'], FILTER_SANITIZE_STRING);
                    }

                    // Stock
                    $stock = 0;
                    if (isset($_POST['stock']) && !empty($_POST['stock'])) {
                        $stock = filter_var($_POST['stock'], FILTER_VALIDATE_FLOAT);
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
                            flash('error', 'Hubo un error buscando los componentes.');
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
                        $demo_id = null;
                        if(DEMO_MODE){
                            $session = new Functions();
                            $demo_id = $session->getDemoId();
                        }
                        $this->query('INSERT INTO stock (type, description, stock, demo_id) VALUES (:type, :name, :stock, :demo_id)');
                        $this->bind(':type', $type);
                        $this->bind(':name', $name);
                        $this->bind(':stock', $stock);
                        $this->bind(':demo_id', $demo_id);
                        $this->execute();
                        $kit_id = $this->lastInsertId();

                        switch ($type) {
                            case 'single':
                            case 'service':{
                                    if ($kit_id > 0) {
                                        flash('success', 'Registro creado correctamente.');
                                    } else {
                                        flash('error', 'No se pudo crear el registro. <br /> Por favor, intente de nuevo.');
                                    }
                                    break;
                                }
                            case 'kit':{
                                    if ($kit_id > 0) {

                                        foreach ($components as $key => $component) {
                                            // Insert records
                                            $this->query('INSERT INTO kit_components (kit_id, component_id, quantity, demo_id) VALUES (:kit_id, :component_id, :quantity, :demo_id)');
                                            $this->bind(':kit_id', $kit_id);
                                            $this->bind(':component_id', $component);
                                            $this->bind(':quantity', $quantity[$key]);
                                            $this->bind(':demo_id', $demo_id);
                                            $this->execute();
                                        }
                                        flash('success', 'El kit ha sido creado correctamente.');
                                    } else {
                                        flash('error', 'No se pudo crear el kit. <br /> Por favor, intente de nuevo.');
                                    }

                                    break;
                                }
                            default:
                                break;
                        }
                    } catch (\Exception $e) {
                        flash('error', 'Hubo un error intentando crear el registro.');
                    }
                } else {
                    flash('error', 'Se ha agotado el tiempo de espera. <br /> Por favor, recargue e intente de nuevo.');
                }
            } else {
                flash('error', 'Hubo un error. <br /> Por favor, recargue e intente de nuevo.');
            }
        } else {
            flash('error', 'Hubo un error. <br /> Por favor, recargue e intente de nuevo.');
        }

        header('Location:' . ROOT_URL);
    }
}
