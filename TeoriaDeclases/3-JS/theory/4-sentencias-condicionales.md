# Sentencias Condicionales

Sirven para poder bifurcar el camino de mi código en función de una condición.

La condición no es mas que una expresión booleana.

## if-else

Nos permite ejecutar un bloque de código si se cumple una condición y ejecutar otro bloque de código diferente si no se cumple.

### Sintaxis

```js
if (_condicion_) {
  // Se escribe todas las instrucciónes que queramos
  // que se ejecuten cuando la condición devuelve true
} else {
  // Se escriben todas las instrucciones que queramos
  // que se ejecuten cuando la condición da false
}

// El if podría ir sin un else

if (_condicion_) {
  // Se escribe todas las instrucciónes que queramos
  // que se ejecuten cuando la condición devuelve true
}

// Por ultimo se podrían encadenar if's. A Esto se le llama if-else-if

if (_condicion_) {
  // Se escribe todas las instrucciónes que queramos
  // que se ejecuten cuando la condición devuelve true
  if (_condicion_interna_) {
    // Se escribe todas las instrucciónes que queramos
    // que se ejecuten cuando la condición_interna devuelve true
  }
} else if (_condicion_2_) {
  // Se escribe todas las instrucciónes que queramos
  // que se ejecuten cuando la condicion devuelve false y la condicion_2 devuelva true
} else {
  // Se escribe todas las instrucciónes que queramos
  // que se ejecuten cuando todas las condiciones anteriores devuelven
  // false
}
```

## Switch

Sirve para ejecutar un bloque de código en función del valor que tenga una variable.

### Sintaxis Switch

```js

switch(_nombreVar_){
    case _valorCasoUno_ : {
        // escribo  las lineas de codigo que haya que ejecutar cuando la variable _nombreVar_ valga _valorCasoUno_
        break; // esta debe ir al final de cada caso para que el switch no siga
    }
    case _valorCasoDos_: {
        // escribo  las lineas de codigo que haya que ejecutar cuando la variable _nombreVar_ valga _valorCasoDos_
        break; // esta debe ir al final de cada caso para que el switch no siga
    }
    ... // podemos poner todos los casos que queramos
    default: {
        // Lo que queremos que se ejecute si la variable _nombreVar_ no cumple ninguno de los casos anteriores
        break;
    }
}

```

## Operador ternario

Se utilizan para asignar un valor a una variable en función de una condición.

```js
const numHijos = prompt('Introduzca tus hijos');
const condicionFamiliar =
  parseInt(numHijos) > 3 ? "Familia Numerosa" : "Familia No numerosa";

// condicionFamiliar va a valer 'Familia Numerosa'  si se cumple la condición y va a valer 'Familia No numerosa'  si no se cumple
```
