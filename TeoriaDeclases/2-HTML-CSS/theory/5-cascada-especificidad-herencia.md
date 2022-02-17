# Cascada, Especificidad y Herencia

¿Que pasa si hay dos valores para la misma propiedades CSS en un elemento HTML?

Esto lo define la cascada y la especificidad.

## Cascada

Tenemos 3 situaciones diferentes:

1. El conflicto se encuentra en el mismo archivo CSS.
2. Que el conflicto se encuentra en diferentes archivos.
3. Que el conflicto se encuentre en la etiqueta Style o en la propiedad `style`.

**Si la especificidad es la misma** dentro del conflicto, se tendrá en cuanta solo la parte de cascada.

Lo que dice la cascada es que el último gana.

1. Mismo archivo -> Gana la propiedad que se ha escrito más tarde en el archivo.
2. Distintos archivos -> Gana la propiedad que se encuenta en el archivo que mas tarde se cargó.
3. Style -> Gana la que se escribió por última vez.

## Especificidad

El valor numérico que el navegador propociona a una propiedad CSS.
Representa cuanto de específico es una propiedad CSS para un elemento HTML.

En función del tipo de selector donde se encuentra esa propieda, el navegador le asigna un valor a su especificidad. Cuanto más especifico sea el selector, mas especificidad tendrá.

En caso de conflicto a nivel CSS, la propiedad que **MAS ESPECIFICAD** tenga es la que gana.

### ¿Como se calcula la especifidad?

- Selector universal => 0 puntos.
- Etiqueta y pseudo-elementos => 1 punto
- clases, atributos, pseudo-clases => 10 puntos
- id => 100 puntos
- inline style => 1000 puntos
- important -> 10.000 puntos

## Herencia

Son las propiedades CSS que un hijo recibe de su padre. El padre lo recibe de su padre y así suceivamente hasta llegar al nodo raíz (`html`).

Por ejemplo: Para poner el tipo de fuente en una página web (`font-family`) no hace falta que lo especifique en todos los parrafos y headings de la web.
Si lo añado al `body` todos sus hijos lo heredarán.

[Lista Propiedades](https://gist.github.com/dcneiner/1137601)
