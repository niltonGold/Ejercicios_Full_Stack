# Box Model

El box model establece que todos los elementos visuales de HTML para el navegador son `cajas`.

Cada componente internamente tiene 4 cajas unas contenidas dentro de las otras.

- **Content Box**: Representa la caja del contenido, es decir, donde se pintan los hijos del nodo del DOM. Es la caja mas interna del Box Model.
- **Padding Box**: Representa el espacio que hay entre el contenido y el borde del elemento HTML. Se modifica con la propiedad CSS `padding`
- **Border Box**: Representa el borde del elemento HTML, el final a nivel visual. Se modifica utilizando la propiedad CSS `border`.
- **Margin Box**: Representa el espacio que hay fuera del borde del elemento. Se modifica utilizando la propiedad CSS `margin`

![Box Model](https://web-dev.imgix.net/image/VbAJIREinuYvovrBzzvEyZOpw5w1/ECuEOJEGnudhXW5JEFih.svg).

Tips:

- La separación entre elementos HTML se realiza utilizando Margin.
- El espacio  entre el limite del contenedor (borde) y el contenido se realiza utilizando Padding.

## ¿Como se depura el Box Model?

En las DevTools -> Pestaña Elements -> Pestañas Style o Computed.

Se puede ver un grafico de colores, cuando seleccionamos un elemento:

- Naranja -> Representa el margin
- Amarillito -> Representa el borde
- Verde -> Representa el padding
- Azul -> Representa el contenido

## Propiedad box-sizing

La propiedad `box-sizing` permite indicar al navegador hasta que caja del Box Model tiene que contar para decidir el tamaño del elemento.

- **content-box**: El tamaño del elemento no incluye ni el padding ni el borde
- **border-box**: El tamaño incluye el borde, el padding y el contenido. (Esto es lo que cambiamos en los resets)
