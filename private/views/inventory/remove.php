<?php
  $_SESSION['token_time'] = time();
?>

<h1 class="m-0 mb-3 text-danger">
  Salida
</h1>

<form action="<?php echo ROOT_URL; ?>/remove/entry" method="post">
  <input type="hidden"
    name="token"
    value="<?php echo $session->getToken(); ?>">

  <div class="form-group row">
    <div class="col-md-3 pr-md-0">
      <label for="date">Fecha</label>
      <input type="date"
        name="date"
        class="form-control"
        value="<?php echo date('Y-m-d') ?>"
        required/>
    </div>

    <div class="col-md-9">
      <label for="notes">Notas</label>
      <textarea name="notes"
        class="form-control noresize"
        required></textarea>
    </div>
  </div>

  <div class="form-group">
    <a href="#" class="btn btn-success show-content preventDefault">Nueva línea</a>
  </div>

  <div class="table-responsive fh-table">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Código</th>
            <th scope="col">Descripción</th>
            <th scope="col">Actual</th>
            <th scope="col" class="w-150p">Despachar</th>
            <th scope="col" class="w-150p">Acciones</th>
          </tr>
        </thead>

        <tbody>
        </tbody>
      </table>
  </div>

  <div class="form-group">
    <button type="submit" class="btn btn-primary" id="btn-save" disabled>Guardar</button>
    <a href="<?php echo ROOT_URL; ?>" class="btn btn-danger">Cancelar</a>
  </div>
</form>

<?php include_once PRIVATE_PATH . '/views/inc/form-container.php'; ?>