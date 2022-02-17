# Bucles (Loops)

Un bucle es una porción de código que repito un número finito de veces.

Existen varios tipos de bucles. Nosotros veremos 2.

## Bucle for

```js
for (let i = 200; i > 100; i = i - 1) {
  // este es el código que voy a repetir
}
```

1. Cuando llego al for ejecuto la **fase de inicialización** (`let i = 200`). Esta fase solo se ejecuta la primera vez que empiezo el bucle
2. Consulto la condición de salida (`i>100`). Si la condición da false, entonces salimos del bucle. Si no ejecutamos la primera vuelta del bucle, es decir **el cuerpo del bucle**
3. Cuando terminemos de ejecutar el cuerpo del bucle, se ejecuta la **fase de actualización** (`i=i-1`)
4. Ejecutamos la condición de salida (`i>100`). Si da false, salimos del bucle. Si da true ejecutamos el cuerpo y volvemos al punto 3.

## Bucle While

```js
while (_condicion_) {
  // cuerpo del bucle, es decir, lo que vamos a ejecutar
}
```

1. valido la `_condicion_` del bucle. si da false, salimos. Si da true ejecutamos una vuelta más.
2. Ejecutar el cuerpo del bucle. cuando terminemos vuelve al paso 1.

## Ejercicio

Crear un bucle for que pida el usuario una frase y pinte en una lista no ordenada cada uno de sus caracteres por separado (es decir en su propio li). Pista acordarse de la función charAt de los strings).

```js
/**
 * 1. Solicitar al usuario una frase. Esto se hace con prompt
 * 2. Recorrer en el bucle la frase hasta su longitud obteniendo en cada vuelta el caracter i
 * 3. Enviar los elementos generados al HTML
 *
 * Ejemplo para cuando el usuario mete `hola`
 *
 * <ul>
 *  <li>h</li>
 *  <li>o</li>
 *  <li>l</li>
 *  <li>a</li>
 * </ul>
 *
 */

let listHTML = '<ul>'; // Tengo una variable donde voy generando el HTML final. La inicializamos con la apertura de la lista
const sentence = prompt("Introduzca una frase"); // le pido al usuario que me indque una frase

if (sentence !== null) {
  for (let i = 0; i < sentence.length; i++) {
    // recorro de uno en uno los caracteres de la frase
    listHTML += `<li>${sentence.charAt(i)}</li>`; // agregamos a lo que valía antes mi estructura HTML el nuevo list item
  }
}

listHTML += '</ul>'; // cerramos la lista
document.write(listHTML); // mandamos al HTML pintar la lista
```
