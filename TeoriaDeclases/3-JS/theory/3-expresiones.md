# Expresiones

Se utilizan en los lenguajes de programación para operar con variables.

Todas las expresiones tienen valores de entrada, simbolos de operación y SIEMPRE devuelve un resultado cuando terminan de operar.

## Expresiones aritméticas

Son las operaciones que puedo hacer con los `number` o `bigInt`.

Necesitare dos valores numéricos y puedo hacer las siguientes operaciones:

- **suma**: realiza la suma aritmética en base 10 de dos operandos. se escribe utiliando el símbolo `+`. ej: `2+2`.

- **resta**: símbolo  `-`
- **multiplicación**: símbolo `*`
- **divisón**: símbolo `/`
- **resto de la division**: símbolo `%`
- **potencia**: símbolo `**`

```js
    2+2; // devuelve 4
    3-2; // devuelve 1
    3*3; // devuelve 9
    4/1; // devuelve 4
    4%1; // devuelve 0
    4**2; // devuleve 16
    // tambien se podrían usar variables
    let operandoUno = 4;
    let operandoDos= 2;
    let resultado = operandoUno + operandoDos; 
    // resultado a partir de aqui va a valer 6 y será un tipo de datos number
```

## Operaciones con strings

### Concatenación

Se pueden juntar (concatenar) dos cadenas de caracteres. Para ello lo trataremos como una suma, pero entre strings.

```js
   'hola' + 'adios'; // como resultado tendremos el string 'holaadios'
   let name = 'FS Bootcamp';
   let greeting = 'Hello ' + name; // greeting tendrá el valor 'Hello FS Bootcamp' 
```

¿Que resultado da esto?

```js
    let name='Neoland';
    let students= 13;
    let result = name + students; // ?? ==> Neoland13 de tipo string
    // NO CAMBIA EL TIPO DE LA VARIABLE STUDENTS
```

## Expresiones booleanas

Son las operaciones que podemos hacer con los tipos de datos booleanos. El resultado de una expresion booleana solo puede tener dos posibles valores: `true` o `false`

Existen tres operaciones más utilizadas cuando trabajamos con booleanos (basadas en el [Algebra de Boole](https://es.wikipedia.org/wiki/%C3%81lgebra_de_Boole))

### AND

![Tabla de verdad AND](https://aristoteles2pc.files.wordpress.com/2011/03/tabla-de-verdad.png)

El símbolo para hacer una operación AND es `&&`

```js
    const A = true;
    const B = false;
    const result = A && B; // result tiene el valor false
```

### OR

![Tabla de verdad OR](https://aristoteles2pc.files.wordpress.com/2011/03/or1.png)

El símbolo para hacer la operación OR es `||`

```js
    const A = true;
    const B = false;
    const result = A || B; // result tiene el valor true
```

### NOT

![Tabla de verdad de NOT](https://aristoteles2pc.files.wordpress.com/2011/03/not1.png)

El símbolo para hacer un NOT es `!` delante de la variable o valor al que queremos aplicarle la not

```js
    const A = true;
    const result = !A; // result tiene el valor false
```

### Operadores de comparación

Me ayudan a comparar dos valores o variables y me devuelve un booleano.

Principalmente se usa con `numbers`, aunque el comparador de igualdad tambien se usa mucho con `strings` y otros tipos de datos

- **>**: El simbolo entre dos valores o variables te da true o false si se cumple la comparación, la primera mayor estricto que la segunda. EJ: `10 > 3` devuelve `true`.
- **<**: True si la primera es menor estricto que la segunda. EJ: `10<3` da `false`
- **>=**: True si el primer valor es mayor o igual al segundo. EJ: `10>=3` da `true`
- **<=**: True si el primer valor es menor o igual al segundo. EJ: `10<=3` da `false`
- **===**: True si el primer valor es exactamente igual al segundo. EJ: `10===3` da `false`
- **!==**: True si el primer valor es distinto al segundo. EJ: `10!==3` da `true`
