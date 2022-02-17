# Introducción JS

Es el `lenguaje de programación` utilizado para que el usuario pueda interactuar con la web.

Es junto a HTML y CSS, lo que utilizamos para construir una pagina o un sitio web.

## ¿Como puedo enlazar JS en una página Web?

Tenemos principalmente dos formas de enlazar el JS dentro de una página HTML.

1. Utilizando tag HTML llamado `script` (similar al Style de CSS)

    ```html
    <script>
        console.log('Hello World from script tag');
    </script>
    ```

2. Desde un archivo externo

Puedo escribir mi JS en un archivo externo, con una extensión `.js` y en el escribir mi código JavaScript.

Debo enlazarlo en la página HTML utilizando la etiqueta `<script>`, pero en vez de escribir el JS dentro, utilizo el atriburo `src` con la URL del archivo (similar al href del css).

```html
<script src="./url-archivo.js"></script>
```

## Cuatro instrucciones para empezar

### Escribir HTML en la web

`document.write('El HTML o el Texto que quiera pintar en la web')`

Esta instrucción me permite pintar en la web código HTML. De momento estará permitida, pero la semana que viene dejara de estarlo.

```js
// Esto escribe un parrafo en la web
document.write('<p>Hola Mundo Write</p>');
```

### Escribir texto en la consola de las devtools

`console.log('El texto que quiero pintar en las devtools')`

Esta instrucción permite pintar en las devtools el texto que vaya entre comillas.

```js
// Esto escribe un texto en la consola de las devtools en la web
console.log('Hola mundo devtools');
```

### Mostrar un popup (dialogo) al usuario

`alert('Texto que quiero poner en el popup')`

Esto muestra al usuario una ventana con la información que metamos entre las comillas simples.

```js
// Esto muestra al usuario un texto como popup en la web
alert('Hola mundo popup');
```

### Solicitar información al usuario

`let userResult = prompt('Por favor introduce algo');`

Esto solicita al usuario información y guarda lo que el usuario ha introducido en la variable (lo veremos en el siguiente capítulo) `userResult`.

Esta variable se puede poner en cualquiera de los metodos anteriores para mostrar la información que el usuario ha introducido.

```js
// solicito la información al usuario y la guardo en una variable
let userResult = prompt('Por favor introduce algo');
// Esto va a pintar un popup con lo que el usuario ha introducido
alert(userResult);
```
