<?php
    $_SESSION['token_time'] = time();
?>

<h1>Activar notificaciones</h1>

<form action="<?php echo ROOT_URL; ?>/home/update" method="post">
    <input
        type="hidden"
        name="token"
        value="<?php echo $session->getToken(); ?>">

    <div class="row">
        <div class="table-responsive my-4 pt-2 col-12">
            <table class="table" id="data-table" data-model-singular="artículo" data-model-plural="artículos">
                <thead>
                    <tr>
                        <th scope="col">Código</th>
                        <th scope="col">Artículo</th>
                        <th scope="col">Notificando a los</th>
                        <th scope="col">Notificar</th>
                    </tr>
                </thead>
                <tbody>
                    <?php
                        if (!empty($viewmodel)) {
                            foreach ($viewmodel as $item) {
                    ?>
                        <tr>
                            <td>
                                <?php echo $item['code']; ?>
                            </td>

                            <td>
                                <?php echo $item['description']; ?>
                            </td>

                            <td>
                                <?php
                                    if($item['notification'] == null){
                                        echo 0;
                                    }else{
                                        echo $item['notification'];
                                    }
                                ?>
                            </td>

                            <td>
                                <!-- Is items receiving notifications? -->
                                <?php if($item['notification'] != null){ ?>
                                    <a href="<?php echo ROOT_URL . '/admin/notifications/' . $item['code']; ?>/unnotify"
                                        class="btn btn-secondary btn-sqr d-block">
                                            Dejar de notificar
                                    </a>
                                <?php }else{ ?>
                                    <a href="#"
                                        class="btn btn-primary d-block btn-sqr show-content"
                                        data-type="notify"
                                        data-text="<?php echo $item['description']; ?>"
                                        data-id="<?php echo $item['code']; ?>">
                                        Notificar
                                    </a>
                                <?php } ?>
                            </td>
                        </tr>
                    <?php
                            }
                        }
                    ?>
                </tbody>
            </table>
        </div>
    </div>
</form>

<?php include_once PRIVATE_PATH.'/views/inc/notify.php'; ?>