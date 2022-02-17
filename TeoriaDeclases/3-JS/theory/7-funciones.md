# funciones

Las funciones son "plantillas" que nos ayudan a reutilizar código. En ellas escribimos el bloque de código que queremos reutilizar y podemos usarlas cuando y donde quiera simplement `invocando a la función`.

Las funciones tienen dos caractiticas principales:

- **Parametros de entrada**: son variables que se definen en la cabecera de la función y se pueden utilizar dentro de la misma. Cuando el programador@ quiera utilizar esa función le debe pasar los valores a los parámetros de entrada.

- **Valor de salida**: Todas las funciones tienen que devolver un valor de salida. este valor se devuelve con la palabra `return`. Si no hay return en una función, lo que devuelve la función es `undefined`.

## Sintaxis

Para declarar una función utilizo la palabra reservada `function` y le asigno un nombre (hay algun caso en el que no hay que asignar nombre).

```js
// Declaración
function miFuncion() {
  // va el código de la función
  return _value_; // devuelvo un valor
  // el código que hay despues de un return nunca se ejecutará
}

// Ejecución
miFuncion(); // esto devolverá un valor que puedo guardar en una variable
```

```js
// definicion
function miFuncionConParametros(miParametroUno, miParametroDos) {
  console.log(miParametroUno);

  return _value_;
}

// ejecucion

let a = 3;
miFuncionConParametros("hola", a); // miParametroUno = 'hola', miParametroDos=3
let b = "adios";
miFuncionConParametros(b, 100); // miParametroUno = 'adios', miParametroDos=100
```

### Ejemplo

Supongamos que queremos hacer una función que me diga si soy familia numerosa o no.

```js
function esFamiliaNumerosa(numHijos) {
  // extended version
  let result = false; // guardo una variable con el resultado
  if (numHijos >= 3) {
    // si el numero de hijos es mayor que 3, entonces es familia numerosa
    result = true;
  }
  return result; // devuelvo el valor de result
}

function esFamiliaNumerosa(numHijos) { // clean version
  return typeof numHijos === 'number' && numHijos >= 3; // devuelvo true si el numero de hijos es >=3
}

esFamiliaNumerosa(2); // false
esFamiliaNumerosa(4); // true

typeof esFamiliaNumerosa; // 'function'

```

## Tipos de funciones

### Anonimas

Son funciones que no tienen nombre. O los guardo en una variable o no las podría ejecutar.

Se utilizan para lo que se conoce como `callbacks`

```js
// definicion con asignacion a variable
let myAnonymousFn = function(){

}

// ejecución
myAnonymousFn();

```

### Con nombre implícito

Las que hemos visto en el apartado de sintaxis

### callbacks

Son funciones (habitualmente anónimas) que se pasan como parámetro de otra función y esta última puede invocarlo.

```js

// version de funcion con nombre

function callbackFn(){
    // El codigo de callback
}


function myFunction(cbFn){
    // El codigo de la función
    // en algún momento de la función necesito llamar a la callback
    cbFn();// llamo a la función que me hayan pasado por parámetro
}

myFunction(callbackFn); // le paso un tipo de datos function que es lo que me pide `myFunction`

myFunction(function(){

}); // le paso una función anónima como callback para que pueda llamarla `myFunction` 

```

### Arrow Function

Son una evolución de las funciones que se incluyeron en JS a partir del 2016.

Las funciones anteriores se siguen usando. Pero la diferencia entre unas y otras es como gestionan el concepto del `this` (veremos en el tema de objetos).

Son siempre funciones anónimas, que podemos guardar en variables o utilizar como callback

#### Sintaxis =>

```js

() => { /*AQUI IRIA EL CODIGO */} // arrow function vacia

(a,b) => { /*AQUI IRIA EL CODIGO */ } // arrow function con 2 parametros de entrada

a => {/*AQUI IRIA EL CODIGO */} // arrow function con solo un parametro de entrada, no hace falta poner los paréntesis

numHijos => typeof numHijos === 'number' && numHijos >= 3; // Cuando solo tengo un return en mi función y nada mas de código, puedo quitar los paréntesis y el return. Esta es la función de familia numerosa anterior, transformada a arrow funcion

const esFamiliaNumerosa = numHijos => typeof numHijos === 'number' && numHijos >= 3; // asi asigno una arrow funcion a una variable de tipo función

esFamiliaNumerosa(3); // devuelve true

```
