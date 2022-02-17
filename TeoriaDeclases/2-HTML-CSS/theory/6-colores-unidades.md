# Colores y Unidades

La mayoria de las propiedades CSS, tienen dos tipos de valores:

- colores
- unidades de medida

# Colores

Existen 3 formas de escribir colores en CSS. son 3 formas semi-equivalentes:

1. **Keywords**: Son palabras que representan colores ya predefinidos en CSS. Para que una propiedad obtenga un valor del keyword, solo tengo que poner su nombre como valor de la propiedad.

   ```CSS
   *{
   color: green; /* Utilizo el keyword green para indicar el verde */
   }

   ```

   [Lista de Keywords](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#color_keywords).

   [Ejemplo Codepen](https://codepen.io/web-dot-dev/pen/ZELGraM)

2. **rgba**: Indica la cantidad de Rojo (R), Verder (G), Azul (B) que debe tener mi color. Además le puedo aplicar lo que se conoce como alpha (a), que se refiere a la transparencia.

   Los numeros que pongo en r,g o b van desde el 0 (asuencia de ese color) hasta el 255 (Todo ese color).

   La transparencia es un número (en coma flotante === decimal) del 0 al 1.

   ```css
   * {
     color: rgba(124, 167, 255, 0.5);
   }
   ```

   [Ejemplo Codepen](https://codepen.io/web-dot-dev/pen/dyNomWW)

3. **Hex**: Es la representacion rgb, pero con una notación hexadecimal. Para poner un valor de un color en hexadecimal, debo iniciar con `#` y escribir el procentaje de r,g,b que quiero de cada uno. Los posibles valores son 00-FF.

    ```css
        * {
            color: #7CA7FF7F; /* rgba(124, 167, 255, 0.5) */
        }
    ```
