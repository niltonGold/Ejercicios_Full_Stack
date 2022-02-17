# Layout

Es la forma en la que los elementos se dividen y se posicionan en la pantalla.

Por defecto el navegador tiene dos tipos de forma de mostrar un elemento.

- bloque: Siempre va debajo del elemento anterior.
- elemento en linea: Se posiciona a continuación de manera horizontal a otros elementos en linea.

Por supuesto que se puede modificar, cambiando la propiedad `display` de un elemento

## Display

### inline vs block

Si tiene un valor inline, se muestra en linea.

Si tiene un valor block, se muestra en bloque.

### Flex

Te permite indicar que un contenedor (flex container) se comporta como  `flexible` y asi sus hijos (flex items) puede ocupar el espacio de manera automática dentro de una misma fila.

Para que un contenedor sea flex, hay que cambia su display: `display:flex`

[Guía](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
[Juego](https://flexboxfroggy.com/#es)

### Grid

Nos permite dividir un contenedor en una rejilla, pudiendo especificar cuantas filas y cuantas columnas tiene esa rejilla.

Además a cada hij@ nos permite indicarle que filas y que columnas va a ocupar.

El mayor problema que tiene es que no es responsive por defecto. Habría que aplicarle `media-queries`.

Para que un contenedor sea grid, debemos indicarle la propriedad `display:grid`

[Guía](https://css-tricks.com/snippets/css/complete-guide-grid/)
[Juego](https://cssgridgarden.com/#es)

## Position

Te permite cambiar la posicion por defecto de un elemento HTML dentro de la página.

Existen varios posibles valores:

- relative (permite que sus hijos puedan posicionarse como absolutos)
- absolute ( te posiciona el elemento al principio de la página o del primer contenedor que tenga position relative, dentro de `arbol genealógico`)
- sticky (permite que el elemento "te siga" cuando haces scroll. Solo te sigue dentro de su contenedor )
- fixed (permite que el elemento te siga pero como absoluto, es decir, en toda la página)
- static (posicion por defecto del navegador)

[Ejemplo](https://codepen.io/web-dot-dev/pen/NWdNGZB)
