# Objetos

Son un tipo de dato en JavaScript y además son la base de lo que se conoce como programación orientada a Objetos (veremos más adelante).

Un objeto representa a un individu@, dentro de su "especie" (clase).

Ese individuo tiene características (propiedades) y acciones (métodos).

Las acciones son funciones.

Las propiedades pueden ser de cualquier tipo de datos, incluido otro objeto.

## ¿Como creo un objeto en JS?

Tenemos que abrir y cerrar llaves `{}` y dentro escribir un par `<nombre_propiedad>:<valor_propiedad>,`

```js

let personaAlex = { // guardamos un objeto en una variable
    nombre: 'Alex',
    edad: 31,
    calvo: true,
    madre: { // puedo encadenar más objetos
        nombre: 'blabla',
        edad: 60
    },
    alumnos: ['Luci', 'Lise', ...],
    andar: function(){/** Cosas de andar **/},
    correr: () => { /** cosas para que Alex corra **/}
};

// ejemplo de un array de objetos

let arrObj = [
    {
        ... // pongo las propiedades de este objeto
    },
    {
        ... // pongo las propiedades de este otro objeto
    }
]

```

## ¿Como accedo al valor de una propiedad de un objeto?

Tenemos que pensar en las propiedades y métodos de un objeto como subvariables. Funcionan igual que las variables que conocemos, lo único que hay que llegar a ellas 'Navegando' por la profundidad del objeto.

Para acceder al siguiente nivel del objeto se utiliza el `<nombre_var_obj>.<nombre_propiedad>`

```js

let personaAlex = {
    nombre: 'Alex',
    edad: 31,
    calvo: true,
    madre: {
        nombre: 'blabla',
        edad: 60
    },
    alumnos: ['Luci', 'Lise', ...],
    andar: function(){/** Cosas de andar **/},
    correr: () => { /** cosas para que Alex corra **/}
};

// quiero saber si la persona es calva

if(personaAlex.calvo){ // accedo al valor de la propiedad calvo del objeto personaAlex y nos da un boolean
    // cosas que hacer si la persona es calva
}

if(personaAlex.calvo && personaAlex.edad >31 && personaAlex.madre.edad > 60){

}

// los alumnos que empiezan por L
let filtered = personaAlex.alumnos.filter(a => a.toLowerCase().startWith('l'));

// ejecutar la funcion andar

personaAlex.andar(); // ejecuto las funciones

```

### Alternativa flexible para acceder a las propiedades de un objeto

Tambien existe una forma de acceder a las propiedades de un objeto utilizando  `[]` y poniendo un string con el nombre de la propiedad a la que quiero acceder

```js

personaAlex['calvo']; // esto es un boolean

personaAlex['edad']; // esto es un number

personaAlex['madre'].edad; // esto es un number
personaAlex['madre']['edad']; // esto es un number

personaAlex[`alumnos`].filter(...);

personaAlex['andar']();

```

Esta forma de acceder nos es útil si tenemos que obtener una propiedad cuyo nombre lo generamos de manera variable en nuestro algoritmo.

## ¿Como cambio el valor de una propiedad existente?

Al igual que las variables, tengo que poner llegar a la propiedad que quiero cambiar del objeto y con una asignación le cambio el valor

```js

let personaAlex = {
    nombre: 'Alex',
    edad: 31,
    calvo: true,
    madre: {
        nombre: 'blabla',
        edad: 60
    },
    alumnos: ['Luci', 'Lise', ...],
    andar: function(){/** Cosas de andar **/},
    correr: () => { /** cosas para que Alex corra **/}
};

// cambiarme el nombre
personaAlex.nombre = 'Otro Nombre'; // a partir de aqui personaAlex.nombre ya no tiene el valor `Alex`

// sumar uno a la edad
personaAlex.edad++;
// o
personaAlex.edad +=1;
// o
personaAlex.edad = personaAlex.edad + 1;

// añadir un nuevo alumno
personaAlex.alumnos.push('Nuevo Alumn@');

```

## ¿Como creo nuevos atributos en el objeto?

Primero debería acceder al atributo, dándole un nombre. A continuación debería asignarle un valor con el  `=`.

```js

let personaAlex = {
    nombre: 'Alex',
    edad: 31,
    calvo: true,
    madre: {
        nombre: 'blabla',
        edad: 60
    },
    alumnos: ['Luci', 'Lise', ...],
    andar: function(){/** Cosas de andar **/},
    correr: () => { /** cosas para que Alex corra **/}
};

// añado el primer apellido como propiedad del objeto
personaAlex.apellido = 'González';
// o en función del caso
personaAlex['apellido'] = 'González';

// añadir un método a madre
personaAlex.madre.castigar = () => {};
// o
personaAlex.madre.castigar = function() {}
// o
personaAlex.madre[`castigar`] = function() {}

```

## ¿Como elimino una propiedad de un objeto?

Utilizaría la palabra reservada `delete` delante del acceso a la propiedad del objeto.

```js

let personaAlex = {
    nombre: 'Alex',
    edad: 31,
    calvo: true,
    madre: {
        nombre: 'blabla',
        edad: 60
    },
    alumnos: ['Luci', 'Lise', ...],
    andar: function(){/** Cosas de andar **/},
    correr: () => { /** cosas para que Alex corra **/}
};

// eliminar la edad
delete personaAlex.edad; // a partir de aqui ya no existirá edad dentro de personaAlex y por tanto cualquier acceso daría `undefined`

// eliminar la edad de madre
delete personaAlex.madre.edad; 

```
