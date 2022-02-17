# Procesos

Un sistema operativo utiliza procesos para poder realizar las operaciones que el usuario le indica.

## ¿Que es un sistema operativo?

Es un software que permite que el usuario a través de los `periféricos` pueda darle instrucciones a un ordenador y mostrar el output de esa instrucción. Esto es lo que se conoce como I/O.

## ¿Que es un proceso?

Es una aplicación ejecutándose en el SO y por tanto puede lanzar instrucciones al microprocesador, es decir, a la máquina.

Cuando creamos un proceso el SO le asigna un ID que se llama `PID`.

Cuando ejecutamos el comando `node` estamos creando un proceso y la aplicación es nuestro archivo `.js`.

Toda la información de un proceso se encuentra en el objeto `process` disponible en cualquier programa nodeJS.

[Referencia](https://nodejs.org/dist/latest-v16.x/docs/api/process.html)

## ¿Que son los argumentos de un programa?

Los argumentos de un programa serían parámetros que pasamos al programa a la hora de ejecutarlo.

El programa podría acceder a su valor dentro del mismo.

Esto se pueden ver como funciones al que le pasamos parámetros de entrada al ejecutarlas.

### ¿Como le paso parámetros a un programa?

Para pasar los argumentos al programa al ejecutarlo, tenemos que pasarle sus valores separador por espacio.

> node demo.js Alex 32 bootcamp

El ejemplo anterior tiene 3 argumentos de entrada. El primero tendrá valor  `Alex` el segundo tendrá valor `32` y el tercero tendrá valor `bootcamp`.

El tipo de datos de los argumentos siempre será `string`.

### ¿Como puedo obtener esos valores en el programa?

Para obtener los valores necesitamos hacer uso del objeto `process`. Este objeto es el que contiene toda la información de un proceso.

Dentro del objeto process existe una propiedad llamada `argv` que es un array de strings con los valores de los argumentos del programa.

Las posiciones 0 y 1 del array están reservadas para lo siguiente:

- 0: Tiene un string con el path absoluto de nodeJS en el SO
- 1: Tiene un string con el path absoluto del archivo JS del programa que estamos ejecutando

> node demo.js Alex

```js

console.log(process.argv[2]); // esto pintará Alex por consola

```
