<!DOCTYPE html>
<html lang="es">
<?php require '../../private/config.php'; ?>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <title>Error 404 | Inventool</title>

    <link rel="stylesheet" href="<?php echo ROOT_URL; ?>/dist/main.css">
    <link rel="stylesheet" href="<?php echo ROOT_URL; ?>/dist/style.css">
</head>


<body class="h-100vh">
    <div class="page-wrap h-100 d-flex flex-row align-items-center">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-12 text-center">
                    <span class="display-1 d-block">404</span>
                    <div class="mb-4 lead">La página que busca no se pudo encontrar.</div>
                    <a href="<?php echo ROOT_URL; ?>" class="btn btn-primary">Regresar a la página de inicio</a>
                </div>
            </div>
        </div>
    </div>
</body>

</html>