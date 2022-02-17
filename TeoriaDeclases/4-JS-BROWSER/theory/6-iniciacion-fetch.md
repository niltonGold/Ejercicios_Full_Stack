# Introducción a fetch (Parte I)

Cuando construyo una web necesito información (datos). Esta información habitualmente la recuperamos de el servidor que la contiene.

Necesito un mecanismo para que el navegador pueda recuperar esa información en un frame de JS.

Antiguamente se utilizaba un clase llamada `XMLHttpRequest`, pero a dia de hoy se utiliza la función `fetch` para poder hacer este tipo de operaciones.

Solicitar información al servidor es un `tipo de operación Asíncrona` y por tanto necesito alguna de las técnicas vistas en el tema anterior.

- **XMLHttpRequest**: Utiliza callbacks para la gestión de la asincronía.
- **fetch**: Utiliza promesas (o async/await) para la asíncronía.

A esta operación de solicitar información al servidor comunmente se le ha llamado `AJAX` que se refieren a `Asynchronous JavaScript And XML`.

## fetch

`fetch` es una función global que acepta un string con la URL del servidor que te va a devolver la información y devuelve una promesa.

```js

fetch(`<URL>`)
.then(gestionRespuesta)

```

Ejemplo Obtener la lista de paises.

(Version Promesas)

```js

// tenemos la lista de ciudades en la siguiente URL (https://gist.githubusercontent.com/Yizack/bbfce31e0217a3689c8d961a356cb10d/raw/107e0bdf27918adea625410af0d340e8fc1cd5bf/countries.json)

// vamos a recuperarla

console.log('Antes del fetch'); // 1
fetch('https://gist.githubusercontent.com/Yizack/bbfce31e0217a3689c8d961a356cb10d/raw/107e0bdf27918adea625410af0d340e8fc1cd5bf/countries.json') // llamo a la función fetch
.then(r => r.json()) // esta primera promesa recibe la respuesta y genera el formato de los datos en otra promesa
.then(d => console.log(d));//3 // la segunda promesa devuelve los datos en el formato indicado por la primera promesa, en este caso JSON
console.log('despues del fetch'); // 2

```
