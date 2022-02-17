# Variables y tipos de datos

## Variables

Es un espacio del ordenador donde guardo información para despues poder utilizarla.

El ordenador es como si tuviese una cajonera gigante y mini-cajones donde yo puedo guardar la información. A estos mini-cajones se le llama variable.

Una variable tiene 4 situaciones:

1. **Declaración**: Es el momento en el que yo creo una variable y le asigno un alias (El nombre de la variable).

   En JS las variables se declaran con la palabra `let` o la palabra `const`

   - **let**: se usa para declarar variables a los que se le asigna un valor despues de declararlas.

   - **const**: Su nombre viene de constante y se usa para variables a las que solo se les da valor cuando se declaran y ese valor nunca más cambia.

   A la palabra (let o const) le sigue, separado por espacio, el alias que yo quiera utilizar para esa variable, es decir, el nombre de esa variable.

   ```js
       let miPrimeraVariable;
       const MI_PRIMERA_VARIABLE_CONSTANTE;
   ```

2. Inicialización

   Esta es la fase en la que le damos el primer valor a una variable. Se hace en el momento de la declarición poniento un `=` y el valor que queremos guardar.

   Para el `const` solo se le puede guardar información durante la inicialización.

   ```js
   // declaración + inicializacion
   let miPrimeraVariable = "valor para el let";
   const MI_PRIMERA_VARIABLE_CONSTANTE = "valor para el const";
   ```

3. Asignación

    Es la fase donde le damos o cambiamos el valor de una variable ya declarada previamente.

    Se puede hacer en cualquier punto del código utilizando la siguiente estructura. `nombreVariable = 'Nuevo valor'`.

    A partir de una asignación las siguientes instrucciones tendrán el nuevo valor de la variable.

    Esto solo se puede aplicar a un `let`. el `const` haria fallar a JavaScript.

    ```js
        // asignación
        miPrimeraVariable = 'valor para el let';
        // Esto produciría un error en de asignación a una constante
        MI_PRIMERA_VARIABLE_CONSTANTE = 'valor para el const';
    ```

4. Obtención del valor

Cuando en mi algoritmo quiero usar el valor de la variable, simplemente escribo en nombre de la variable donde la quiera usar.

## Tipos de datos

Cuando creo una variable le tengo que indicar el tipo de variable que es.

JavaScript es `débilmente tipado`, es decir, las variables obtienen el tipo que son utilizando el valor que se le ha asignado.

*No debemos cambiarle el tipo de datos a una variable ya declarada e inicializada.*

Todos los lenguajes de programación vienen con unos tipos pre-definidos que se conocen como `tipos primitivos`.

En JavaScript hay 7 tipos de datos primitivos (veremos 6 de momento):

- **string**: representa una cadena de caracteres. Nos ayuda a escribir letras, palabras o frases. En JS para poder dar valor a una variable como string, envolvemos el texto en comillas simples `'aqui va el texto'`.

```js
  let myFirstString = 'Hola Esto es mi primer String';  
```

- **number**: permite guardar información numerica, tanto enteros como reales. Esto nos puede ayduar a hacer operaciones matemáticas a posteriori.

```js
  let myFirstNumber = 10;
  let myFirstFloatNumber = 10.05;
  let myFirstNegative = -10;
```

- **bigInt**: permite guardar numeros enteros muy grandes (tambien guarda los pequeños).

- **boolean**: permite guardar una variable que solo tiene dos estados: verdadero (true) o falso (false).

Para darle valor se utilizan las palabras reservadas `true` para verdadero o `false` para falso.

```js
  let myFirstBoolean = true;
  let myFirstFalseBoolean = false;
```

- **undefined**: Es un tipo de datos que JS asigna a una variable cuando esta se declaró pero nunca tuvo ni inicialización ni asignación.

```js
  let myFirstUndefined;
  let myFirstInitializedUndefined = undefined;
```

- **null**: Es un tipo de datos que damos a una variable para proporcionarle ningún valor, es decir, la posición 0 de la memoria RAM.

```js
  let myFirstNull = null;
```

para saber el tipo de datos que tiene una variable en un momento concreto del algoritmo podemos usar `typeof <nombre_var>`

```js
  let str = 'hola';
  typeof str; // esto devolverá un string 
```

Mas adelante veremos los `objects` y los `arrays`.
