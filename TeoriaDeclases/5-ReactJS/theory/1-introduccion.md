# Introducción

ReactJS es una librería para construir interfaces de usuario. Fue liberada por Facebook en 2009 para la construción de SPA's (Single Page Application)

Nos ayuda a construir el front-end de una manera optimizada.

Otros competidores de react podrían ser Angular o Vue.

Para construir UI con ReactJS necesitamos aprender un nuevo tipo de archivo. (JSX)

Para usar reactJS necesitamos como mínimo 2 librerías:

- react (core de reactJS)
- react-dom (librería para la gestión optimizada del árbol DOM)

[Documentación ReactJS](https://reactjs.org/docs/getting-started.html)

## ¿Como uso reactJS?

Para ello necesito varias cosas:

1. Un documento HTML donde cree un contenedor (un div donde meteré reactJS)
2. Cargar los JS de react y react-DOM
3. Crear un JS propio donde construir el código de tu aplicación
4. Cargar ese JS en tu web
5. Disfrutar

Esta forma de cargar reactJS está muy pero no genera ventaja frente a lo que ya teníamos. Además hacer un DOM un poquito complejo sería muy redioso, ya que tenemos que gestionar las funciones de `createElement` de reactJS.

Para poder pintar y desarrollar de manera más intuitiva sale a la luz un "lenguaje" llamado JSX.

## JSX

Es una extensión de la sintaxis de JavaScript que nos permite meter HTML dentro de JS.

```jsx
const element = <h1>Hello, world!</h1>;
```

Para que el navegador pueda entender JSX (ya que solo interpreta HTML, CSS y JS) necesito una librería que me traduza de JSX a HTML+CSS+JS y así el navegador pueda renderizarlo.

A esta librería se le conoce como `babel`
