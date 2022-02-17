# Introdución a la programación orientada a objetos

Surge de una necesidad para poder representar y gestionar el mundo que queremos implementar, de una manera más limpiar y ordenada.

Tiene 4 pilares fundamentales:

- **Encapsulación**: Antes de la POO las características y métodos de una entidad de nuestro programa estaban dispersas por toooodo el código. La encapsulación te ayuda a situar toda esta información en un mismo sitio.

- **Abstracción**: Te ayuda a poder utilizar las entidades, sin conocer el detalle de implementación de las mismas.

- **Herencia**: Permite que existan entidades generales y que luego puedas crear entidades más específicas que reciban propiedas y métodos de esas entidades más generales.

- **Polimorfismo**: Un tipo puede tener múltiples formas (tantas como clases descendientes tenga)

Para poder trabajar de esta forma tenemos dos elementos/conceptos:

- **clase**: Representa la definición de una entidad dentro del mundo de mi programa. Ejemplo: Vehiculo, Coche, Gato, Persona, Empleada, ClaseAcademica, etc. Dentro de una clase se definen las propiedades y los métodos que puedo hacer con mi entidad.

- **Objeto**: Representa un@ individu@ concreto de la entidad de una clase. Es una entidad real que tiene los valores concretos de sus propiedades. A esto se le conoce como `instancia`, es decir, un objeto es la instancia de una clase.

## ¿Como creo una clase?

Una clase siempre tiene lo que se conoce como `constructor`, que es una función especial que se llama cada vez que cree un objeto de esa clase y sirve para inicializar las propiedades de la misma.

```js
// para crear una clase utilizo la palabra reservada class

class NombreClaseCammelCase {
  // el nombre de la clase tiene que ser en cammel case y mayúscula

  constructor(valor) {
    // esa función se llama cada vez que cree un objeto de esta clase y sirve para inicializar las propiedades de la misma.
    this.propName = valor; // asignamos las propiedades que queramos al this de la clase para luego utilizarlas en otros métodos. Se le pueden asignar valores que vengan por parámetro de entrada del constructor o valores estáticos si fuese necesario
    this.otherProp = 4;
  }

  classMethod(param) {
    // aqui va el código de ese método de la clase. Puede acceder a las propiedades del this de la clase y utilizarlas, devolverlas o lo que necesitemos
    this.otherProp++; // actualiza la propiedad (estado) de esta clase
  }
}
```

## ¿Como creo un objeto de una clase?

Para generar una instancia de un objeto tengo que utilizar la palabra reservada `new`

```js
const obj = new NombreClaseCammelCase("valor_prop"); // esto crea un objeto de la clase NombreClaseCamelCase y lo almacena en la variable `obj`

// a partir de aqui puedo utilizar los métodos y propiedades del objeto, definidos en la clase
obj.classMethod("valor_param"); // llama al método classMethod con un parámetro de entrada
```

## Ejemplo más real

Vamos a representar un perro.

Como propiedades este perro tendrá:

- Propiedades

  - nombre
  - nombreDueño
  - raza
  - edad
  - estaVacunado
  - genero

- Metodos
  - cumplirAños
  - obtenerAñosHumanos
  - vacunar
  - cambiarDueño

```js
// lo primero es crear la clase con su implementación

class Dog {
  // inicio la definición e implementación de la clase

  constructor(name, ownerName, breed, gender, color) {
    // creo el constructor para iniciar las propiedades
    this.name = name;
    this.ownerName = ownerName;
    this.age = 0;
    this.breed = breed;
    this.isVaccinated = false;
    this.gender = gender;
    this.color = color;
  }

  turnYears() {
    // añadimos 1 los años del perro
    this.age++;
  }

  retrieveHumanYears() {
    return this.age * 7; // "supuestamente" un año perruno son 7 humanos
  }

  vaccinate() {
    this.isVaccinated = true;
  }

  changeOwner(newOwner) {
    this.ownerName = newOwner;
  }
}

const simba = new Dog("Simba", "Alex", "Golden Retriever", "Female");
console.log(simba.age); // pinto por consola la edad de simba --> 0
simba.turnYears();
console.log(simba.age); // pinto por consola la edad de simba --> 1
console.log(simba.retrieveHumanYears()) // pinto sus años humanos --> 7
console.log(simba.color)
```
