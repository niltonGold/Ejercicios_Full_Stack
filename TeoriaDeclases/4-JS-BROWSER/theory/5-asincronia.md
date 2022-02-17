# Asincronía

En un navegador, JavaScript solo puede ejecutar una única instrucción de código al mismo tiempo.

Cuando termina la instrucción, pasa a la siguiente y así hasta que no haya más instrucciones que ejecutar. (Secuencial)

JavaScript como lenguaje es orientado a eventos, que en una página web cuando se produce un evento (click, resize, hover, etc) se puede ejecutar JS de nuevo, con todas las instrucciones definidas para ese evento.

Cuando las instrucciones de ese evento han terminado, JS se queda en un estado "dormido" hasta el siguiente evento.

Esto es lo que se conoce como `Event Loop`.

La web no puede ir a más de 60pfs y si bajamos de 25-30fps, empezaremos a ver la web un poquito más lenta.

Cuando una tarea es muy pesada o requiere una espera, si la hacemos síncrona estaríamos bloqueando JS hasta que termine. Si esa tarea tarda más de 16.67ms (60fps), entonces ya no podríamos garantizar que podemos mostrar el siguiente frame antes de los 16.67ms y por tanto ya no podríamos ir a 60fps.

Como esto haría la web muy lenta y poco utilizable, JS nos da la oportunidad de mandar esas tareas de espera a segundo plano, es decir, le podemos indicar a JS que guarde una tarea de espera sin bloquear el hilo de JS y así poder seguir utilizando el propio hilo. Además JS nos avisará cuando termine la espera.

Ejemplo de operaciones asíncronas:

- Esperar a que se produzca un evento del usuario DOM.
- Esperar a la respuesta de un servidor.
- Esperar cierto número de milisegundos, lo que se conoce como timer.

## Callbacks

Son funciones que se pasan como parámetro de una función asíncrona y que le indica a la función asíncrona que JS debe ejecutr cuando termine la espera.

En el navegador, lo usaremos principalmente para timers y eventos.

El uso del callback, es el mecanismo de gestión de asincronía tradicional. Este mecanismo presenta un problema llamado `callback hell`

![Callback Hell Example](https://miro.medium.com/max/721/0*iiecmuTLPBqbxd5V.jpeg)

### Timers en el navegador

Son temporizadores. El navegador me permite establecer código que se ejecute en un tiempo X de ms.

Tenemos dos funciones que nos permiten realizar esto de manera asíncrona:

- `setTimeout`: Es una funcion global, que recibe dos parametros y devuelve un number, que es el identificador del timer.

  - _callback_: La función a ejecutar en un determinado periodo de tiempo
  - _ms_: El número de ms del timer. Cuando estos ms lleguen a 0, se ejecutará la funcion de callback en el **siguiente loop de JS**

- `setInterval`: Es una función global que acepta los mismos parámetros que el setTimeout, pero la diferencia es que se ejecuta en forma de intervalo cada X ms que le hallamos puesto como segundo parámetro

### Ejemplos de callback

```js
setTimeout(() => {
  console.log("Esto es un callback definido como valor");
}); // timeout con timer 0ms, lo que significa que se ejecuta en el siguiente frame

const timerFn = () =>
  console.log("Esto es un callback guardado en una variable");

setTimeout(timerFn, 300); // timeout que se espera como mínimo 300ms antes de ejecutarse
```

## Promesas

Es un mecanismo de gestión de asincronía. Una promesa es un objeto con estado y puede estar en los siguientes estados:

- **pending**: Cuando la promesa se encuentra en este estado, la asíncronia todavía se encuentra ejecutandose. Es el estado inicial cuando creamos una promesa.
- **fulfilled**: Es el estado en el cual la asíncronía ha terminado correctamente y podemos recoger su resultado, es decir, esta resolved
- **rejected**: Es el estado en el cual la asincronía ha terminado con error y podemos recoger el resultado del error.

![Promise status](https://javascript.info/article/promise-basics/promise-resolve-reject.svg)

### Como se crea una promesa

Existe una clase global que se llama `Promise`. Para crear una promesa tendremos que crear un objeto de la clase Promise.

El constructor acepta un parámetro, de tipo función. Esta función es la que va a llamar a la asincronía.

La funcion como parámetros recibe otras dos funciones (resolve, reject). Estas funciones son las que habrá que llamar cuando queramos terminar la promesa y pasarla a fulfilled (ejecutamos resolve) o rejected (ejecutar la funcion reject)

Ejemplo de creación de una promesa

```js
const myPromise = new Promise((resolve, reject) => {
  // hemos creado la promesa
  // el código que hay aqui se ejecutará de manera asíncrona
  resolve("Hemos resuelto la promesa OK"); // esto resuelve la promesa con un string como valor

  reject("Hemos resuelto la promesa KO"); // esto resuelve la promesa rechazándola con un string como error
});
```

### Como se escucha cuando la promesa ha terminado

Para ello el objeto que hemos creado de la promesa tiene varios métodos. El principal que vamos a ver ahora es el método `then`

`then` es una función que recibe como parámetro de entrada dos funciones. El primer parámetro es una función que se ejecutará cuando todo haya ido OK, es decir, la promesa esta `fulfilled` y la segunda funcion se ejecutará cuando la promesa esté KO, es decir, su estado es `rejected`

Ejemplo con la promesa creada anteriormente

```js
myPromise.then(
  (value) => {
    // funcion se ejecuta cuando la asíncronia se ha resuelto correctamente
    // value tiene el valor de lo que se pasó en el resolve
  },
  (error) => {
    // función que se ejecuta cuando la promesa ha sido rejected
    // error tiene el valor de lo que se pasó en el reject
  }
);
```

### Ejemplo completo y orden de ejecución

```js
console.log("Antes de crear la promise"); // 1

const myPromise = new Promise((resolve, reject) => {
  // hemos creado la promesa
  console.log("Creando la promise"); // 2
  // el código que hay aqui se ejecutará de manera asíncrona
  setTimeout(() => {
    console.log("Antes de rechazar la promise"); //7
    reject(true);
  }, 1000); // esto resuelve la promesa con un string como valor
  console.log("Antes de  terminar de crear la promise"); // 3
});

console.log("Despues de crear la promise"); // 4

myPromise.then(
  (value) => console.log(`La promesa está fulfilled con valor ${value}`),
  (error) => console.log(`La promesa está rejected con error ${error}`)
); // 8 la de error

console.log("Despues del then de crear la promise"); // 5
```

## Async/Await

Es lo mismo que una promesa, pero escrito de otra manera (más fácil)

Me permite trabajar con la asincronía como simulando que fuese algo síncrono. Todo async/await se puede escribir como promesa

Para utilizar async/await lo primero que necesitamos envolver el código asíncrono en una función declarada como `async`.

Dentro de esa función `async` al código que sea asíncrono le precederá la palabra `await`. Esto hará que la siguiente linea a la del código asíncrono no se ejecute hasta que no termine la asincronía.

Una función async, siempre devuelve una promesa que se resuelve cuando llega al return y lo hace con el valor del return

Dentro de una función async, se puede meter más de un await.

Veamos un ejemplo creando nosotros la asincronía mediante promesas

```js
const myPromise = new Promise((resolve, reject) => {
  console.log("Inicio Promise"); // 1
  setTimeout(() => {
    console.log("Termina el timeout"); // 5
    resolve("RESUELTA");
  }, 3000); // genero una asincronía de 3 segundos
});

async function firstAsyncFn() {
  console.log("Inicio first Async Fn"); // 3
  const data = await myPromise;
  // no se ejecuta este código hasta qye la promesa no se resuelva
  console.log("No me pinto hasta que la promesa no se resuelva"); // 6
  return 4;
}

console.log("Me ejecuto antes de llamar a la funcion"); // 2
firstAsyncFn().then(console.log, console.log); //7 // esto devuelve una promesa, que cuando se resuelven todos sus await, la promesa se resolverá con el return de la función
console.log("Me ejecuto sin esperar a la asincronía"); // 4
```

vale ya sabemos como obtener un resolve de una promesa utilizando async/await.
¿Como puedo obtener el reject?. Para ello necesitamos concer lo que son las excepciones

### Excepciones

Son herramientas dentro de un lenguaje de programación que nos ayudan a lanzar y capturar errores.

#### Lanzando una excepcion

Para lanzar una excepcion, es decir, un error debemos utilizar la palabra reservada `throw` seguido del error que queremos lanzar (podemos utilar la clase `Error` de JS para generar un nuevo error)

```js
throw new Error("Esto es un error producido por mi");
```

[Posibles tipos de errores](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error)

Cuando yo lanzo una excepcion con `throw` si no hay nada que la gestione, JS lo captura y bloquea el hilo, es decir, **no se ejecutará ninguna linea de código más en ese frame (pero si se pueden ejecutar los siguientes)**.

Por tanto suele ser importante capturar y gestionar los errores.

#### Capturando errores

Para poder capturar un error, necesitamos envolver el código susceptible de lanzar error dentro de un bloque `try`.

La gestión de la excepción se producirá en el bloque `catch` que pertenece al try.

De esta manera JS intentará ejecutar el código dentro del try y si alguno lanza una excepción, ya no se ejecutará más del bloque try y empezará a ejecutarse el bloque catch.

```js
function exception() {
  console.log("inicio de la funcion que lanza una excepcion"); // 2
  throw new Error("Error propio");
  console.log("Este console log nunca llegará a pintarse por el throw");
}

try {
  console.log("Empezamos con el codigo que puede producir excepcion"); // 1
  exception(); // esta función lanzará una excepción
  console.log("Este console log nunca llegará a pintarse por la excepción");
} catch (e) {
  // esto solo se ejecuta cuando exista una excepción dentro del try
  console.log(e); // 3 // puedo utilizar el error
} finally {
  // este bloque se ejecuta siempre, haya excepción o no, al final o del try o del catch
  console.log("Esto se ejecuta siempre"); // 4
}

// esta linea se ejecutara cuando termine o el try completo o el try + el catch si ha habido excepcion
```

En un await para poder obtener el reject de una promesa, se envuelve este await con un try/catch y dentro del catch, recibiremos el valor del error del reject

```js

async function firstAsyncFn(){

    try{
        const data = await myPromise;
        // no se ejecuta este código hasta qye la promesa no se resuelva
        console.log('No me pinto hasta que la promesa no se resuelva');
        return 4;
    }catch(err){
        // gestionaría el reject de la parte asíncrona
    }
}

```
