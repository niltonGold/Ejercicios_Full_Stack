# Arrays Multidimensional y Funciones

En JavaScript, los arrays tienen una serie de funciones predefinidas que nos ayudan a operar de manera sencilla con ellos.

Con estas funciones podemos ordenar, filtrar, buscar, añadir y eliminar elementos, partir la lista en dos y alguna más.

## Funciones de los arrays

### push, pop, shift y unshift

Sirven para añadir o eliminar elementos del principio o del final del array.

- **push**: Añade uno o más elementos al final del array, _modificando el array original_ y devolviendo la nueva longitud del array.

```js
const myList = [4, 2, 1];

// myList[myList.length] = 5;
const newListLength = myList.push(5); // myList = [4, 2, 1, 5] --- newListLength=4 (nueva longitud del array)

myList.push(8, 2, 6, 4); // myList = [4, 2, 1, 5, 8, 2, 6, 4] --- nueva longitud del array=8
```

[Documentación](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)

- **pop**: Elimina el ultimo elemento del array, _modificando el array original_ y devolviendo el elemento eliminado

```js
const myList = [4, 2, 1];

const removedItem = myList.pop(); // myList = [4, 2] --- removedItem=1 (ultimo elemento)

myList.pop(); // myList = [4]
```

[Documentación](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop)

- **shift**: Elimina el primer elemento del array, _modificando el array original_ y devolviendo el elemento eliminado

```js
const myList = [4, 2, 1];

const removedItem = myList.shift(); // myList = [2, 1] --- removedItem=4 (primer elemento)

myList.shift(); // myList = [1]
```

[Documentación](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift)

- **unshift**: Insertar al principio uno o varios elementos, _modificando el array original_ y devolviendo la nueva longitud

```js
const myList = [4, 2, 1];

const newListLength = myList.unshift(5); // myList = [5, 4, 2, 1] --- newListLength=4 (nueva longitud del array)

myList.unshift(8, 2, 6, 4); // myList = [8, 2, 6, 4, 4, 2, 1, 5] --- nueva longitud del array=8
```

[Documentación](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift)

### forEach vs map

Son funciones que sirven para recorrer uno a uno los elementos del array y realizar alguna operación con ellos.

Lo que aceptan como parámetro es una función **callback**.

#### Callback

Esta función callback tiene la siguiente estructura:

```js
(value, index, arr) => {
  /** CODIGO A EJECUTAR **/
};
```

Los parámetros de entrada significan:

- **value**: es el elemento de la iteración actual del bucle interno de la función
- **index**: es el indice de la iteración actual del bucle interno
- **arr**: Es el array completo, sobre el que estamos ejecutando la función

La función la definimos nosotros como programadores y no necesariamente tenemos que definir todos los parámetros, solo definiremos loas que vamos a usar.

Para que sepáis lo que pasa por debajo de estas funciones de los arrays, un ejemplo con bucle for sería algo asi:

```js

// esta sería la función callback que nosotros definiremos como desarrolladores
const callbackFn = (v,i,arr) => {/** CODIGO NUESTRO **/}

// esto es lo que hace JS por debajo (para el ejemplo del forEach, para el resto será parecido)

for(let i=0; i<arr.length, i++){ // itera el array uno a uno
    callbackFn(arr[i], i, arr); // ejecuto la funcion que me pasa el desarrollador con los parámetros definidos (arr[i] === value, i === index, arr === arr)
}

```

#### forEach

Se utiliza para dos casos principalmente:

1. Actualizar o modificar variables externas que dependan de valores de un array
2. Modificar los valores del **array original** o el propio array

Esta función **NO devuelve nada, es decir, devuelve undefined**

Ejemplo del caso 1

```js
const myList = ["Axel", "Lisel", "Pedro"];

let listaConcatenada = "";

myList.forEach((name) => (listaConcatenada += name)); // sumo a la lista el nombre de la iteración actual

console.log(listaConcatenada); // 'AxelLiselPedro'
```

Ejemplo del caso 2

```js
const myList = ["Axel", "Lisel", "Pedro"];
myList.forEach((name, i, arr) => (arr[i] += "s")); // añadir una s al final de cada elemento del array

console.log(myList); // ['Axels', 'Lisels', 'Pedros']
```

[Documentación](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)

#### map

Recorre el array, generando y devolviendo uno nuevo. La información de cada posición del nuevo array es lo que devuelva la función callback.

```js
const myList = [3, 5, 6];

// quiero un nuevo array que los cuadrados del array original
const myListSquare = myList.map((v) => v ** 2); // [9,25,36]
```

[Documentación](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

### Otros ejemplos

Hay muchas mas funciones. Os voy a dar 3 ejemplos y para el resto deberéis ir a la docu de las funciones de arrays

#### find

Nos devuelve el primer elemento del array que cumpla la condición que le indiquemos en el callback. Si no hay ningun elemento que lo cumple devolverá `undefined`

```js
const myList = [56, 55, 54, 55];

// encontrar el primer numero que sea mayor o igual a 54
const foundItem = myList.find((v) => v >= 54); // devuelve 56

// encontrar el primer numero que sea mayor o igual a 54 y menor o igual a 55
const otherFoundItem = myList.find((v) => v >= 54 && v <= 55); // devuelve 55

const itemIndexFound = myList.findIndex((v) => v >= 54 && v <= 55); // devuelve 1
myList[itemIndexFound]; // 55
```

#### filter

Devuelve un subarray, es decir, un array de longitud <= longitudOriginal, con los elementos que cumplan la condición del callback. **NO modifica el array original**. Si no hay ningun elemento que cumpla la condición, entonces devuelve un array vacio.

```js
const myList = [56, 55, 54, 55];

// array filtrado con los elementos que sean mayor o igual a 54
const filteredList = myList.filter((v) => v >= 54); // [56, 55, 54, 55]

// array filtrado con los elementos que sean mayor o igual a 54 y menor o igual a 55
const otherFilteredList = myList.filter((v) => v >= 54 && v <= 55); // [55, 54, 55]

// array filtrado con los elementos que que estén en la posición par
myList.filter((v, i) => i % 2 === 0); // [56, 54]

// array filtrado con los elementos que estén en la posición par y ademas sean mayor que 55
myList.filter((v, i) => i % 2 === 0 && v > 55); // [56]
```

#### sort

Sirve para ordenar elementos en un array. Si no le pasamos nada, por defecto el `sort` realiza una ordenación por caracteres (por su posición unicode)

```js
[1, 2, 10, 3].sort(); // [1,10,2,3] (El uno está antes siempre que el 2 o el 3)
```

Para poder comparar los elementos de una lista, el sort acepta una `función de comparación`. A esta funció le entrarán dos elementos de la lista (a,b) y debemos devolver si `a>b`, si `a<b` o si `a=b`;

La función de comparación debe devolver un `number`

- `>0`: Significa que b se situará antes que a en el array original
- `<0`: Significa que a se situará antes que b en el array
- `=0`: Significa que a y b mantendrán su orden entre ellos (NO SU POSICION) en el array

Ejemplos:

```js
// ordenación de numeros ascendente
[5, 2, 6, 2, 3, 1].sort((a, b) => a - b); // [1,2,2,3,5,6]

// ordenación de numeros descendente
[5, 2, 6, 2, 3, 1].sort((a, b) => b - a); // [6,5,3,2,2,1]

// ordenación, primero los pares y luego los impares
[5, 2, 6, 2, 3, 1].sort((a, b) => {
  if (a % 2 === 0 && b % 2 === 1) {
    // primero par y segundo es impar
    return -1;
  }

  if (a % 2 === 1 && b % 2 === 0) {
    // primero impar y el segundo es par
    return 1;
  }
  // Si llega mi codigo hasta aqui, o a y b son pares o a y b son impares
  return a - b;
}); // [2,6,2,5,3,1]

// Optimización del anterior
[5, 2, 6, 2, 3, 1].sort((a, b) => (a % 2) - (b % 2)); // [2,6,2,5,3,1]

// ordenar un array de strings por la longitud del string en orden ascendente
["hola", "adios", "b", "a", "esternocleidomastoideo"].sort(
  (a, b) => a.length - b.length
); // ["b", "a", "hola", "adios", "esternocleidomastoideo"]
```

## Arrays multidimensionales

![Array multi-dimensionales](https://revistadigital.inesem.es/informatica-y-tics/files/2019/02/Array-Multidimensional-ligera.jpg)

![Otra forma de arrays multidimensionales](https://ichi.pro/assets/images/max/724/1*X0Dg7QfSYtWhSAu-afi8-g.png)

### Arrays bi-dimensionales

Nos permiten representar una matriz de filas y columnas. Por ejemplo una pantalla (pixeles de ancho x pixeles de alto), tablero de ajedrez.

Para poder representarlo en JS necesitaríamos tener un arrays cuyos elementos también sean arrays.

```js
// ejemplo de array de 2x3 de numeros
let array2D = [
  [2, 4, 3], // fila 0
  [3, 5, 4], // fila 1
];

array2D[0][1]; // esto me va a devolver un 4, accediendo a la fila 0 y a la columna 1

// como se recorre un array bidimensional
// version for/while
for (let i = 0; i < array2D.length; i++) {
  // for recorrer las filas
  for (let j = 0; j < array2D[i].length; j++) {
    // recorro las columnas
    console.log(array2D[i][j]); // obtengo la fila i, la columna j
  }
}

// version funciones arrays
array2D.forEach((r,i) => { // recorro las filas (rows)
  r.forEach((c,j) => {
    // c ya tiene el valor, tengo de manera opcional los indices por si los necesitase. Si no los usase no harían falta definirlos
  })
})

// si no los defino
array2D.forEach( r => r.forEach(c => console.log(c)));


```
