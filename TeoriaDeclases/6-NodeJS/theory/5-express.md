# Express

Es una librería npm para crear servidores HTTP(s) y así poder comunicar un cliente con nuestro servidor express y así poder devolver los datos que necesita.

## Instalación

En un proyecto npm, ejecutar

> npm install express --save

## Primer Servidor

Para crear un servidor con express necesitamos:

1. importar el módulo de express
2. llamar a la función express. Esto crea la app
3. Definir las rutas de la app.
4. Levantar el servidor (poniendo la app a escuchar en un puerto)

```js
import express from "express"; // paso 1

const app = express(); // paso 2
const port = 3000;

/** INICIO DEL PASO 3 */
app.get("/", (req, res) => {
  res.send("Hello World!");
});

/** FIN DEL PASO 3 */

app.listen(port, () => {
  // paso 4
  console.log(`Example app listening at http://localhost:${port}`);
});
```

Note: _En un ordenador hay 65536 puertos (0-65535). No puede haber dos aplicaciones en un mismo puerto. Los puertos del 0 al 1024 están reservador para un usuario administrador_

### Puertos por defecto en función del protocolo

**Number Assignment**
20 File Transfer Protocol (FTP) Data Transfer
21 File Transfer Protocol (FTP) Command Control
22 Secure Shell (SSH) Secure Login
23 Telnet remote login service, unencrypted text messages
25 Simple Mail Transfer Protocol (SMTP) email delivery
53 Domain Name System (DNS) service
67,68 Dynamic Host Configuration Protocol (DHCP)
80 Hypertext Transfer Protocol (HTTP) used in the World Wide Web
110 Post Office Protocol (POP3)
119 Network News Transfer Protocol (NNTP)
123 Network Time Protocol (NTP)
143 Internet Message Access Protocol (IMAP) Management of digital mail
161 Simple Network Management Protocol (SNMP)
194 Internet Relay Chat (IRC)
443 HTTP Secure (HTTPS) HTTP over TLS/SSL

## Creando rutas en nuestro servidor

En express para crear una ruta accesible por el servidor HTTP, podemos utilizar las funciones de nuestra `app express` que corresponden a los métodos HTTP existentes.

Estas funciones acepta dos parámetros.

- El primer parámetro es de tipo string y corresponde a la ruta (path) que queremos exponer en nuestro servidor
- El segundo parámetro es una funcion, que corresponde al callback que se ejecutará cada vez que un cliente haga una petición a la ruta del parámetro uno. Esta función de callback recibe dos parámetros por parte express.
  - [Request](https://expressjs.com/en/4x/api.html#req): La peticion HTTP del usuario. De aqui podríamos sacar toda la información de la petición del cliente (body, query params, headers, etc)
  - [Response](https://expressjs.com/en/4x/api.html#res): Objeto que utilizaremos para generar la respuesta a la petición del cliente. Se le puede añadir Headers o Body entre otros

```js
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/", (req, res) => {
  res.send("Hello World! from POST");
});

app.patch("/", (req, res) => {
  res.send("Hello World! from patch");
});

app.put("/", (req, res) => {
  res.send("Hello World! from put");
});

app.delete("/", (req, res) => {
  res.send("Hello World! from delete");
});
```

Nota: *Para que express procese el body en formato JSON, los clientes deben inclui la cabecera `Content-Type:application/json` en su petición, sino el body estará vacío*

## Componente Router

La forma que tenemos de organizar las rutas (dentro del app.js) tiene un problema principal, que no escala (que no se puede mantener bien cuando tenemos muchas rutas).

Para solucionar este problema, express nos proporciona un componente que se llama `Router`.

Este router en si mismo es para la definición, pero nos permite agregarle las subrutas de una aplicación y añadir el router creado a la app.

Esto nos permite definir las rutas de una manera jerárquica, es decir, en forma de árbol.

Cada Router tiene su archivo independiente, en el que se definen las rutas y las funciones que manejas esas rutas. Luego este Router se exporta y es importado por la app o por otro Router utilizando el método `use`.

Por tanto como desarrollador@ tenemos dos misiones:

1. Crear el Router en un archivo independiente
2. Consumir el Router en la app o en otro router

### Crear un router

Para crear un router, tengo que hacer los siguientes pasos:

1. importar express
2. crear el router llamando a la función `express.Router()`
3. definir en el objeto creado en el paso 2 las rutas como veníamos haciendo en la app
4. exportar el router creado

```js

import express from 'express'; // paso 1

const router = express.Router(); // paso 2

// paso 3

router.get('/hola', (req,res) => {
  res.send('hellooooo get')
});

router.post('/hola', (req,res) => {
  res.send('hellooooo post')
});

// Otra forma de definir el paso 3 y un pelín más organizado

const getHello = (req,res) => {
  res.send('hellooooo get')
};

const postHello = (req,res) => {
  res.send('hellooooo post')
}

router.route('/hola')
      .get(getHello)
      .post(postHello)
      .delete(() => {});

router.route('/hola/:id') // esto sería otra ruta diferente
      .get(() => {})
      .delete(() => {});

export default router; // paso 4

```

### Consumir un router

En el archivo del `app` o del `router padre` debo hacer lo siguiente:

1. importar el router creado
2. utilizar el método `use` para pasarle un path como primer parámetro y el router creado como segundo. Esto lo que hace es asociar a ese path todos los subpath's del router.

Ejemplo con el router de la sección anterior

```js

import demoRouter from 'URL/router-demo.js'; // paso 1

app.use('/demo', demoRouter); // paso 2

```

Con este ejemplo. ¿Que rutas tiene nuestra aplicación del ejemplo?

Una ruta necesita si o si un método HTTP y un path. En nuestro ejemplo tenemos `dos rutas`.

¿Que path tendrán esas dos rutas? -> `/demo/hola`

Las rutas se van encadenando desde la app, formando así el árbol de rutas de mi backend.

## Middlewares

Un middleware es una función que acepta 3 parámetros:

- Request
- Response
- Función next(): esta función sirve para que podamos pasar al siguiente middleware o al handler de la ruta.

Esta función se utiliza para proporcionar funcionalidad común a varias rutas.

Se puede registrar a nivel de `app`, `router` o `ruta`.

Tanto a nivel de app como a nivel de router se pueden registrar los middlewares con la función `use`.

A nivel de ruta, se registra el middleware como parámetro de la ruta (como parámetro de la función get, post, put, ...)

```js

// definición del middleware (auth.middleware.js)

// Quiero hacer un middleware que compruebe que el usuario está logado o no. Si está logado le dejo pasar la peticion, sino le devuelvo 401 y la petición no llega al handler
export function authMiddleware(req, res, next){
  // logica del middleware
  if(/*hay usuario autenticado*/){
    next(); // llamo al siguiente middleware o al handler de la ruta
  }else{
    res.sendStatus(401); // devuelvo al usuario 401 (No Autorizado)
  }
}


// Uso de un middleware

// a nivel de ruta completa
router.route('/hola')
      .get(authMiddleware, getHandlerHola) // necesita auth
      .post(postHandlerHola); // no necesita auth

// a nivel de ruta de path
router.route('/hola') // todas las rutas de este path usarán el middleware
      .all(authMiddleware)
      .get(getHandlerHola)
      .post(postHandlerHola);

// a nivel de router
router.use(authMiddleware); // todas las rutas u subrutas de este router usarán el middleware

// a nivel de app
app.use(authMiddleware); // todas las rutas y subrutas de la app usarán este middleware

app.use('/demo',authMiddleware, demoRouter); // todas las rutas y subrutas de demo router utilizarán el router

```
