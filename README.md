# Inventool
Inventool es una aplicación web compacta para el manejo de entradas y salidas de inventario. Está desarrolla con el modelo MVC en PHP, Bootstrap y JQuery.

Para más información sobre la misma, puede visitar el [este artículo](http://engranaje.me/entrada/vision-general-de-inventool-una-aplicacion-compacta-para-el-manejo-de-inventario) relacionado en [Engranaje](http://engranaje.me).

Si quiere probar un demo, puede ingresar a [este enlace](http://www.engranaje.me/inventool.demo).

## Visión general
Manejar un inventario con Inventool es sencillo.

Primero, se pueden crear los distintos artículos o registros desde la pestaña **Nuevo**, lo que permitirá agregar el nuevo registro especificando su tipo, el cual será de tipo singular por defecto. El tipo singular se refiere a cualquier artículo terminado que maneja existencia, lo cual requerirá de una descripción o nombre de artículo y su existencia inicial. El tipo kit se refiere a los artículos o productos que están compuestos por otros artículos, lo cual habilitará otra sección para seleccionar los componentes del kit. Y el tipo servicio se refiere a los artículos que no manejan existencia

Estos registros se mostrarán en la página de inicio, desde donde se podrá modificar su descripción o se podrán eliminar.

Para agregar cierta cantidad a un artículo o registro, se debe acceder a la pantalla de **Entrada**, lo cual permitirá añadir a la existencia de los registros deseados. Por el contrario, desde la pantalla de **Salida** se podrá extraer de la existencia de los registros.

Estas entradas y salidas se registrarán en la pestaña de **Actividades**, desde donde se podrán consultar o revertir.

Por último, desde la pestaña de **Papelera** se podrán visualizar los registros eliminados, y estos se podrán recuperar o eliminar permanentemente.

## Instrucciones
Para que el proyecto funcione primero debe crear la base de datos, la cual por defecto tiene por nombre **inv_tooldb**. Si se desea cambiar el nombre, se debe especificarlo en el archivo de configuración **config.php**. Este archivo tiene por nombre **config_example.php** y se encuentra en la carpeta **private**, por lo cual debe de ser renombrado.

Luego de crear la base de datos, puede configurarla ejecutando manualmente el script **inv_tooldb.sql** de MySQL que se encuentra en la carpeta **public**, el cual creará las tablas necesarias y los roles predefinidos. Pero esto también se puede realizar automáticamente una vez que se haya configurado el resto de la aplicación, accediendo al controlador **seed** desde la URL **url-de-la-aplicación.dominio/seed**. Esto generará las tablas automáticamente siempre que el script de MySQL se encuentre en la carpeta public y que la base de datos esté vacía. También, se podrá crear un administrador general con la contraseña especificada en el archivo de configuración de administrador general **admin_user.php** dentro de la carpeta private, accediendo al método **admin** del controlador seed desde la URL **url-de-la-aplicación.dominio/seed/admin**. Este generará automáticamente el primer usuario de administrador general en caso de que no haya ningún otro usuario existente, con la finalidad de acceder a la aplicación en caso de que se hayan deshabilitado todas las opciones de registro de usuario.

El proyecto funciona actualmente con la URL inventool.test de forma local. Si desea utilizarlo con otra ruta, como **http://localhost/inventool/public**, entonces debe cambiar las constantes de URL en el archivo config.php.

Finalmente, el archivo de configuración dispone de algunos parámetros para que el administrador general controle ciertos aspectos de la aplicación. El primero es el parámetro **URL_PATH**, el cual será requerido para especificar la URL raíz de la aplicación luego de subirlo a un servidor en vivo o *hosting*.

El mismo archivo también dispone de parámetros como **USER_REGISTRATION**, el cual permitirá que los usuarios puedan registrarse sin ayuda de un administrador si se ha especificado con el valor `true`; **USER_RECOVER**, que permitirá que los usuarios puedan recuperar su contraseña sin ayuda de un administrador si se ha especificado con el valor `true`, o el parámetro `PASSWORD_CHANGE`, el cual permitirá que los usuarios con rol de administrador puedan cambiar la contraseña de otros usuarios si se ha especificado con el valor `true`.

Para más detalles sobre la configuración, visite la [entrada en Engranaje]().

# Contribución
Si tienes alguna idea para añadir al proyecto y quieres contribuir, puedes contactarnos para incluirlas en el proyecto general y así hacer de esta una aplicación más robusta y útil.

Para cualquier información adicional puedes contactarnos a través del correo contacto@engranaje.me.

# Autores
Desarrollo y diseño:
* [Harold Abreu](https://github.com/Harverbo)

Iconos:
* [Renelis Abreu](https://github.com/renelis)

## Licencia
Este proyecto ha sido desarrollado bajo la licencia MIT - lee el archivo [LICENSE.txt](LICENSE.txt) para más detalles.

## Donación
Si crees que esto es útil y quieres ayudarnos a desarrollar más herramientas, ayúdanos a mantenernos despiertos comprándonos una taza de té :)

[![paypal](https://www.paypalobjects.com/en_US/i/btn/btn_donate_SM.gif)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=QSWLDMN5EATE6)
