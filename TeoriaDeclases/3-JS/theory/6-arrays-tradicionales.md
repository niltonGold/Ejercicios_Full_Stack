# Arrays tradicionales

Un array es una lista de elementos (preferiblemente iguales). Sería como el `ul` o el `ol` de HTML pero en el mundo de la programación.

Cada elemento está en un orden dentro del array, es decir, en una posición

## ¿Qué puedo hacer con un elemento de un array?

- Crear un elemento (C)
- Leer el valor de un elemento (R)
- Actualizar el valor de un elemento (U)
- Eliminar un elemento

A estas 4 operaciones en informática se les conoce como `CRUD`

## ¿Como creo un array?

El array podemos considerarlo un tipo de datos "nuevo" y por tanto puedo guardarlas en una variable.

Cuando un array no tiene elementos se le conoce como array vacío.

### ¿Como creo un array vacio?

Basicamente abriendo y cerrando corchetes `[]`

```js
let myList = [];
```

### Crear un elemento en el array

Para crear un elemento debo primero saber la posición de la lista que quiero que ocupe ese elemento.

Los arrays empiezan por la posición 0, es decir, el primer elemento es el que está en la posición 0 del array.

El ultimo elemento es el que esta en la posición `longitud-1` del array.

1. Conocer la posición donde quiero crear el elemento.
2. Conocer el valor que quiero darle a ese elemento.
3. Asignarle el valor a la variable del array en esa posición.

```js
let myList = []; // tengo creado un array
myList[0] = "Primer Elemento"; // añado en la posición 0 el siguiente string
myList[99] = "Elemento numero 100"; // añado en la posición 99 el siguiente string
```

Si la posición estuviese ya ocupada, reemplaza su valor. Esta sería la forma de actualizar (U de CRUD)

### Como leo el valor de un elemento

```js
let myList = [2, 3, 4]; // creo un array con 3 elementos iniciales

console.log(myList[0] + myList[1] + myList[2]); // pintaría 9 en la consola

console.log(myList[0].length); //pinta la longitud de un array
```

```js
const TRAIN_COUNT = 10; // guardo una variable con los trenes existentes
const trainDeparture = []; // creo la variable donde almaceno si los trenes han salido o no

for (let i = 0; i < TRAIN_COUNT; i++) {
  // solicito al usuario que por cada tren me indique si ha salido o no, guardando la información en el array
  const USER_INPUT = prompt("Ha salido el siguiente tren? (true/false)");
  const USER_INPUT_PARSED = USER_INPUT.toLowerCase() === "true";
  trainDeparture[i] = USER_INPUT_PARSED;
}

// aqui ya tendría un array de booleanos

let trainCountDeparture = 0; // variable para saber cuantos trenes han salido

for (let i = 0; i < trainDeparture.length; i++) {
  // cuento la cantidad de trenes que han salido
  if (trainDeparture[i]) {
    trainCountDeparture++;
  }
}

// aqui ya tengo la cantidad de trenes que hayan salido

const PERCENT_COUNT_NEEDED = Math.ceil((75 * TRAIN_COUNT) / 100); // regla de tres redondeada siempre hacia arriba

const OUTPUT_MINIMUN_SERVICES =
  trainCountDeparture >= PERCENT_COUNT_NEEDED
    ? "<h1>Se han cumplido los servicios minimos</h1>"
    : '<h1 style="color:red">No se han cumplido los servicios minimos</h1>';

document.write(OUTPUT_MINIMUN_SERVICES);
```

```js
const TRAIN_COUNT = 10; // guardo una variable con los trenes existentes

let trainCountDeparture = 0; // variable para saber cuantos trenes han salido
for (let i = 0; i < TRAIN_COUNT; i++) {
  // solicito al usuario que por cada tren me indique si ha salido o no, actualizando el contador de los que han salido
  const USER_INPUT = prompt("Ha salido el siguiente tren? (true/false)");
  const USER_INPUT_PARSED = USER_INPUT.toLowerCase() === "true";
  if (USER_INPUT_PARSED[i]) {
    trainCountDeparture++;
  }
}

// aqui ya tengo la cantidad de trenes que hayan salido

const PERCENT_COUNT_NEEDED = Math.ceil((75 * TRAIN_COUNT) / 100); // regla de tres redondeada siempre hacia arriba

const OUTPUT_MINIMUN_SERVICES =
  trainCountDeparture >= PERCENT_COUNT_NEEDED
    ? "<h1>Se han cumplido los servicios minimos</h1>"
    : '<h1 style="color:red">No se han cumplido los servicios minimos</h1>';

document.write(OUTPUT_MINIMUN_SERVICES);
```
