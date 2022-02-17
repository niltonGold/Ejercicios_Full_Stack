# Componentes funcionales

Hasta ahora hemos creado componentes utilizando clases que extendían de `React.Component`.

Desde hace un tiempo React sacó una nueva forma de construir componentes a través de funciones.

la idea consisten en crear una función con el nombre del componente (debe empezar con mayúscula) y devolver el HTML que pinta ese componente (lo que antes se devolvía en el render).

```jsx
function MyComponent() {
  return <h1>Esto es lo que antes poníamos en el render</h1>;
}
```

## ¿Que pasa con las props?

Las props con clases iban en el constructor de la clase y luego para acceder en los métodos de la clase se utilizaba `this.props`.

En los componentes de función las props son un parámetros de entrada de la función, por lo que ya no hará falta el `this`.

Al igual que las clases, cuando el padre modifica una prop, se produce un refresco del component, es decir, se llama a la función de nuevo

```jsx

function MyComponent(props){

    const handleClick = (e) => console.log(e);

    return (
        <h1>{props.name}</h1>
        <h1>{props.surname}</h1>
        <button onClick={handleClick}>Haz Click</button>
    )
}

```

## Hooks

Son funciones cuyo nombre empieza por `use`.

React por defecto trae varios hooks para gestionar el ciclo de vida.

vamos a ver dos:

- `useState`: Es un hook que acepta como parámetro de entrada el valor inicial de ese atributo del estadp. Como parametro de salida devuelve un array de dos elementos:
  - el primero es el valor actual de ese atributo del estado.
  - el segundo es la función que se utiliza para actualizar ese atributo del estado. Esta función es muy muy similar al `setState` de las clases, solo que para ese atributo.

Puedo declarar mas de un useState por component. Cuando llamamos a esa funcion del segundo parámetro, este actualiza el estado y por tanto se produce un refresco del componente.

```jsx

function MyComponent(){
    // deconstruyo el array de dos elementos poniendo en una variable
    // el primer elemento (valor) y en otra variable el segundo elemento
    // la función a actualizar
    const [counter, setCounter] = useState(0); // genero una nueva variable de estado

    return (
        <p>El valor actual del counter: {counter}</p>
        <button onClick={() => setCounter(counter+1)}>+</button>
    )
}

```

- `useEffect`: Es un hook (de tipo function por tanto), que me permite poner el código que produzca efectos secundarios. Ejemplos.
  En el useEffect irán:

  - las llamadas al fetch
  - los timers
  - addEventListeners (a fuego)

    Sirve para meter el código asíncrono. Como función no devuelve nada, pero acepta dos parámetros de entrada.

    - función a ejecutar, con el código asíncrono: Es uan función que no recibe parámetros y que en su cuerpo hay que poner el código asíncrono. Puede devolver `undefined` o una `funcion`
    - array de dependencias (opcional): indicamos todas las variables que cuando se modifiquen, tienen que volver a ejecutar a función del useEffect (la del primer parámetro).

El useEffect nos permite simular el ciclo de vida de un componente de Clase. Gracias a el podemos implementar lo que serían las funciones `componentDidMount`, `componentDidUpdate` y `componentWillMount`

### ComponentDidMount

Para simular el componentDidMount, necesitamos que nuestro useEffect solo se ejecute la primera vez. Para ello tenemos que poner el array de dependencias vacio

```js

function MyComponent(){

    useEffect(() => {
        // codigo del useEffect
        // como no tiene dependencias solo se va a ejecutar ua vez
        // por tanto simulo un componentDidMount
        fetch('URL')
        .then(r => r.json())
        .then(d => console.log(d))
    },[]);

    return <h1>Simulo el componentDidMount<h1>
}

```

### componentDidUpdate

Para simular esta parte del ciclo de vida debo o no pasar el array de dependencias o pasar en el array de dependencias, las variables de las que depende. Con esto último se ejecuta la primera vez y solo cuando cambie alguna de las variables del array.

```jsx

function MyComponent(){
    const [offset, setOffset] = useState(0);
    useEffect(() => {
        // codigo del useEffect
        fetch(`URL?offset=${offset}`)
        .then(r => r.json())
        .then(d => console.log(d))
    }, [offset]); // esto hace que este useEffect solo se ejecute la primera vez y luego cuando cambie la variable offset

    return <button onClick={() => setOffset(150)}>cambiar offset a 150<button>
}

```

### componentWillUnmount

Para esto necesitamos que la funcion del primer parámetro del useEffect, devuelva otra función, a parte de hacer su código.

Esta función que devuelve, se ejecutará cuando el componente se elimine. Viene muy para eliminar cosas residuales, ej: 

```jsx

function MyComponent(){
    const [offset, setOffset] = useState(0);
    useEffect(() => {
        // codigo del useEffect
        const timerID = setInterval(() => {
            console.log('hola');
        }, 1000); // pinto un log cada segundo

        // Esta function que deveuelve el primer parámetro del useEffect
        // se va a ejecutar cuando se elimine el componente,
        // por tanto en este caso, lo necesitaremos para eliminar el timer
        return () => clearInterval(timerID);
    }, []);

    return <button onClick={() => setOffset(150)}>cambiar offset a 150<button>
}

``` 