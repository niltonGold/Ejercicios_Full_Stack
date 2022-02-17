# Concepto del this

En JS el `this` funcion diferente a otros lenguajes de programación.

`this` es una palabra reservada del lenguaje que es de tipo `object` o `undefined`.

Este this representa el objeto owner (propietario) del contexto al que pertenece una línea de código y cambia su valor en función del ámbito donde se ejecuta la línea de código.

Hay principalmente dos tipos de contexto (global y local).

## Contexto Global

Es el contexto general de la aplicación (fuera de una función). En este, el `this` toma el valor del objeto global, que varía en función de si estamos en un navegador o en un servidor.

- En un navegador el objeto global es el `window`, que es un objeto que reprenta la ventana del navegador en la que estamos ejecutando nuestra web.

- En el servidor lo veremos más adelante.

Desde hace pocos años se puede acceder a un objeto llamado `globalThis` que siempre va a devolver el objeto global. globalThis será igual a this en el ámbito global.

## Contexto de función

Este es el contexto de todo aquello que se ejecuta dentro de una función.

### ¿Cual es el valor de this dentro de una función?

Aqui tendremos varios caso. Como norma general. Dentro de una función el valor del this depende del valor del padre donde esté contenido.

- Si la función es global, el padre es el contexto global y por tanto `this` tomará el valor del objeto global.

- Si la función pertenece a un `object` como propiedad, el `this` toma el valor del objeto al que pertenece.

```js
let a = {
  prop: 34,
  fn: function () {
    this.prop += 20;
    console.log(this.prop);
  },
};

a.fn(); // pinta 54 y ha actualizado el valor de prop de `a` a 54
```

Objetos anidados

```js
let a = {
  prop: 34,
  b: {
    prop: 44,
    fn: function () {
      this.prop += 20;
      console.log(this.prop);
    },
  },
  fn: function () {
    this.prop += 20;
    console.log(this.prop);
  },
};

a.fn(); // pinta 54 y ha actualizado el valor de prop de `a` a 54
a.b.fn(); // pinta 64 (objeto al que pertenece) ha actualizado el valor de prop de `b` a 64
```

Por defecto, **las arrow function no utilizan** el `this` del objeto, siempre el this vale lo mismo que el objeto global. Por tanto no debemos usar `this`, dentro de una arrow function.

## use-strict

Es un modo de ejecución de JavaScript que nos obliga a utilizar una buenas prácticas.

Para poder ejecutar JavaScript en modo estricto, debemos poner un string al principio del archivo, es decir, en la primera linea de la siguiente manera `'use strict'`;

**En las funciones que no pertenecen a un objeto o que no tienen el this cambiado (utilizando la función bind, call o apply), el valor de this será undefined.**

```js
function a() {
  console.log(this); // esto imprimira el objeto global, al no estar bajo 'use strict'
}

function b() {
  "use strict";
  console.log(this); // esto imprimira undefined, al estar bajo 'use strict'

  let a = {
    prop: true,
    fn: function () {
      console.log(this); // esto imprimira el objeto `a`, ya que el use strict no afecta al this de los objetos
    },
  };

  a.fn();
}
```
