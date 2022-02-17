# Escuchando al usuario

JavaScript en el navegador se basa en eventos. Estos eventos suelen estar producidos por el usuario.

Cuando el usuario interactúa con la página, desde JS lo vamos a poder escuchar y reaccionar.

A esto se le conoce como `listeners`.

## Listener de eventos

Tanto el BOM como cualquier nodo del DOM tiene dos funciones que nos ayudan a crear listeners.

- `addEventListener(event, handler)`: Esta funcion nos permite crear un `listener` para un evento que indiquemos.

  - event => parámetro de tipo string con el nombre del evento que queremos escuchar. Son nombres predefinidos por el lenguaje. Ej: 'click', 'resize', 'keypress', 'keydown', 'keyup', etc.
    [Tipos Eventos](https://developer.mozilla.org/en-US/docs/Web/Events)
  - handler => es una `funcion` que recibe un parámetro de entrada. Este parámetro es un objeto que contiene la información del evento. Esta será la función que se ejecutará cuando el usuario produzca el evento.
    EJ: `e => { /** TU CODIGO VA AQUI **/}`

    ```js
    // quiero escuchar el click de un botón

    const btnDOM = document.getElementById("MY_BTN");

    btnDOM.addEventListener("click", (e) => {
      // Escucho el evento click y le asigno un handler
      console.log(e.target); // pintar el elemento del DOM que produjo el evento
    });
    ```

    [Referencia](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)

- `removeEventListener(event, handler)`: Elimina el listener añadido con addEventListener.

  - event: De tipo string con el nombre del evento
  - handler: es una función que debe ser la misma funcion del addEventListener.

  ```js
  // quiero escuchar el click de un botón y eliminarlo

  const btnDOM = document.getElementById("MY_BTN");

  const clickHandler = (e) => {
    // Escucho el evento click y le asigno un handler
    console.log(e.target); // pintar el elemento del DOM que produjo el evento
  };

  btnDOM.addEventListener("click", clickHandler);
  // tres doritos despues
  // ejecuto el remove cuando quiera eliminar el listener, pasándole la misma función que le pase al addEventListener
  btnDOM.removeEventListener("click", clickHandler);
  ```

  [Referencia](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener)
