# Storage en el navegador

Nos sirve para almacenar información en el navegador y que pueda ser recupara en siguientes navegaciones del usuario.

Hay varios tipo, veremos 3:

## LocalStorage

Nos permite almacenar la información hasta que el usuario decida borrar en la configuración del navegador.

- Tiene vida **"Infinita"** (hasta que el usuario la borre a mano)
- Comparte la información entre pestañas o ventanas de una misma web.

¿Que puedo hacer con el local storage? CRUD, **Crear, Leer, Actualizar y Borrar**

El local storage se gestiona con un objeto global que se llama `localStorage`.

La información se guarda utilizando pares `clave:valor`, es decir, el dato (valor) que quiero guardar o utilizar tiene asociada una clave.

```js

// Crear/actualizar
localStorage.setItem('clave', 'valor'); // tanto clave como valor deberían ser de tipo string para evitar errores

// leer
const value = localStorage.getItem('clave'); // devuelve el valor de esa clave o null si no existe

// borrar
localStorage.removeItem('clave'); // elimina un valor con esa clave

```

Como el storage solo guarda strings, el intentará ejectura el método toString() de lo que introduzcamos como valor.

Esoto hará que el `getItem` siempre devuelva un string y podría producirnos problemas si no lo sabemos controlar.

Por tanto, el ejemplo completo necesita de la utilidad globla `JSON` para poder ayudar a guardar la información adeuadamente.

```js
// Crear/actualizar
localStorage.setItem('clave', JSON.stringify(valor)); // la clave es string y con este cambio el valor puede ser cualquier tipo de datos, menos función

// leer
const value = JSON.parse(localStorage.getItem('clave')); // devuelve el valor de esa clave en el tipo de datos original o null si no existe

// borrar
localStorage.removeItem('clave'); // no se ve afectado por el tipo de datos

```

## Session storage

Es igual que el local storage, pero su contenido se elimina al cerrar la pestaña. Sigue las mismas reglas que el localstorage, lo que pasa que utilizando el objeto global `sessionStorage`

```js
// Crear/actualizar
sessionStorage.setItem('clave', JSON.stringify(valor)); // la clave es string y con este cambio el valor puede ser cualquier tipo de datos, menos función

// leer
const value = JSON.parse(sessionStorage.getItem('clave')); // devuelve el valor de esa clave en el tipo de datos original o null si no existe

// borrar
sessionStorage.removeItem('clave'); // no se ve afectado por el tipo de datos
```

## Cookies

Son una forma de almacenar e intercambiar información entre el cliente (navegador) y el servidor.

Una cookie tiene la siguiente información:

- **Nombre**: el identificador de la cookie. No puede haber 2 cookies para el mismo dominio, par el mismo path con el mismo nombre.
- **valor**: es la información que contiene la cookie, es decir, los datos que quiero almacenar e intercambiar con el servidor.
- **domain**: es el dominio al que pertenece la cookie. Un sitio web solo puede leer o gestionar las cookies de su dominio
- **path**: es la página web a la que pertenece la cookie dentro de un sitio web. Cuando ponemos un path esa cookie pertenecerá a esa página web y a todas las páginas hijas de esta.
- **expire**: es el tiempo de expiración de la cookie, es decir, cuando se cumpla ese tiempo la cookie se elimina. es una fecha de tipo `Date`
- **httpOnly**: un booleano que indica si puede ser gestionada desde el JS del navegador o no. Si es true, solo puede ser gestionada por el servidor, nunca por el cliente.
- **secure**: un flag (booleano) para indicar si tiene que funcionar por http o no. Si esta a true solo funciona por https.

¿Como lo uso?

### document.cookie

Es un 'String' que me ayuda a gestionar las cookies. Es el mecanismo antiguo que ya se está susutituyendo por `cookieStore`

```js

document.cookie // imprime en string todas las cookies de ese path, ese dominio que puedan ser gestionadas por JS. Procesando este string podremos obtener el valor de una cookie

document.cookie = 'demo=valor; Secure'; // Ejemplo de creación y actualización de una cookie

document.cookie = 'demo=valor; Expires=Thu, 01 Jan 1970 00:00:01 GMT;'; // eliminación de una cookie, seteando su fecha de expiración a una fecha anterior a la actual, en este caso el 1 de enero de 1970

```

### cookieStore

Es un mecanismo moderno para la gestión de las cookies. Todavía no está soportado por todos los navegadores.

Es un objeto del window, que ofrece métodos para poder hacer el CRUD de las cookies. Todos sus métodos son asíncronos (lo veremos mañana)

```js

await cookieStore.get('name'); // obtiene un objeto con la información de la cookie 'name'

await cookieStore.getAll(); // obtiene un array de objetos con la información de todas las cookies

cookieStore.set('name', 'value', options); // crea o actualiza una cookie

cookieStore.delete('name'); // elimina una cookie

```
