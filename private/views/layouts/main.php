<?php
if (isset($_GET['controller'])) {
    if ($_GET['controller'] != '') {
        $page = $_GET['controller'];
    } else {
        $page = 'home';
    }
} else {
    $page = 'home';
}

if (isset($_GET['action'])) {
    if ($_GET['action'] != '') {
        $action = $_GET['action'];
    } else {
        $action = 'index';
    }
} else {
    $action = 'index';
}

if (isset($_GET['id'])) {
    if ($_GET['id'] != '') {
        $page_id = $_GET['id'];
    } else {
        $page_id = '';
    }
} else {
    $page_id = '';
}

// Initialize session
$session = new Functions();
if ($page != 'auth') {
    $session->require_auth();
}
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <title>Inventool</title>

    <link rel="stylesheet" href="<?php echo ROOT_URL; ?>/dist/main.css">
    <link rel="stylesheet" href="<?php echo ROOT_URL; ?>/dist/style.css">
</head>
<body class="d-flex flex-column h-100vh">
    <header class="bg-primary">
        <div class="row container m-auto">
            <div class="col-md-12 p-0">
                <nav class="navbar navbar-expand-md navbar-light bg-primary px-0 mx-0">
                    <a class="navbar-brand" href="<?php echo ROOT_URL; ?>">Inventool</a>

                    <button class="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#primary-navbar"
                        aria-controls="primary-navbar"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse justify-content-end" id="primary-navbar">
                        <?php if ($session->is_logged()) { ?>
                            <ul class="navbar-nav m-0 align-items-center">
                                <li class="nav-item<?php echo ($page === 'new') ? ' active' : ''; ?>">
                                    <a class="nav-link" href="<?php echo ROOT_URL; ?>/new">Nuevo</a>
                                </li>

                                <li class="nav-item<?php echo ($page === 'log') ? ' active' : ''; ?>">
                                    <a class="nav-link" href="<?php echo ROOT_URL; ?>/log">Actividades</a>
                                </li>

                                <?php if ($session->is_admin()) { ?>
                                    <li class="nav-item<?php echo ($page === 'trash') ? ' active' : ''; ?>">
                                        <a class="nav-link" href="<?php echo ROOT_URL; ?>/trash">Papelera</a>
                                    </li>
                                <?php } ?>

                                <li class="nav-item position-relative" id="user-dropdown">
                                    <a class="nav-link text-center" href="#!"><i class="lzi user"></i></a>

                                    <div class="user-dropdown-menu">
                                        <ul>
                                            <li><?php echo $session->getName(); ?></li>

                                            <li class="my-3"><a class="nav-link p-0" href="<?php echo ROOT_URL; ?>/profile">Perfil</a></li>

                                            <?php if ($session->is_admin()) { ?>
                                                <li class="mb-3"><a class="nav-link p-0" href="<?php echo ROOT_URL; ?>/admin">Administración</a></li>
                                            <?php } ?>

                                            <li><a class="nav-link p-0" href="<?php echo ROOT_URL; ?>/auth/logout/<?php echo $session->getUserToken(); ?>">Cerrar Sesión</a></li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        <?php } elseif ($action == 'login' && USER_REGISTRATION) { ?>
                            <ul class="navbar-nav m-0">
                                <li class="nav-item<?php echo ($page === 'new') ? ' active' : ''; ?>">
                                    <a class="nav-link" href="<?php echo ROOT_URL; ?>/auth/register">Registrarse</a>
                                </li>
                            </ul>
                        <?php }?>
                    </div>
                </nav>
            </div><!-- .col-md-12 -->
        </div><!-- .container -->
    </header>

    <main class="container mt-3 d-flex flex-column flex-1">
        <?php require $view; ?>
    </main>

    <script src="<?php echo ROOT_URL; ?>/dist/main.js"></script>
</body>
</html>