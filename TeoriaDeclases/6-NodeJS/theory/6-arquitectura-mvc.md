# Arquitectura MVC

La arquitectura es una disciplina del mundo del desarrollo, que se encarga de definir cómo debe ser un sistema, de diseñarlo.

La arquitectura define una serie de patrones y reglas que los desarrolladores tienen que utilizar para construir una aplicación.

Una de las arquitecturas más conocidas es el patrón MVC (Modelo-Vista-Controlador).

- *Modelo*: Son los datos del negocio, los datos de mi aplicación. Las operaciones que se pueden hacer con el modelo son el CRUD.

- *Vista*: Es la Interfaz de usuario, lo que el usuario ve, donde se representan los datos.

- *Controlador*: Es la pieza que se encarga de escuchar las operaciones que indica el usuario y modificar los datos en consecuencia. Cuando termina de modificar los datos, avisa a la vista con los datos actualizados.

![Express MVC](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/routes/mvc_express.png)

## Arquitectura MVC en express para SPA's

Nuestra aplicación expressJS (backend), tiene datos divididos en entidades.

Para aplicar el patrón MVC en express debemos dividir nuestras entidades en directorios. Cada directorio contiene como mínimo 3 ficheros:

- *entidad.model.js*: Es el archivo JS que gestiona los datos y las operaciones. En nuestro actual es el que guardará/recuperará la información en ficheros. A partir de mañana, lo haremos en una BBDD.

- *entidad.controller.js*: Es el archivo JS que tiene los handlers de las rutas y que se encargan de llamar al modelo para operar con los datos y devolver una respuesta a la vista.

- *entidad.router.js*: Es el archivo JS que se encarga de definir las rutas y asignarles un controller.

Por ejemplo para una entidad de vuelos quedaría la siguente estructura:

-src
  -flights
    -flights.controller.js (reaccionar a la petición y devolver la info)
    -flights.model.js (Se encarga de persistir la informacion)
    -flights.router.js (definir los endpoints que tiene flights)
  -users
    -users.controller.js
    -users.model.js
    -users.router.js
