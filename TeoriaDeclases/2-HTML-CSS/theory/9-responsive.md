# Responsive

Es la habilidad de una web para poder verse en diferentes resoluciones de pantalla.

Gracias a flexbox, tenemos gran parte del responsive ya de manera automática con la propiedad `flex-wrap:wrap`

Pero hay ciertos casos en los que necesitamos cambiar alguna propiedad para resoluciones específicas.

Para poder hacerlo tenemos lo que se conoce como media query.

## Media Queries

Se puede escribir una media query utilizando `@media` en el CSS.

### Sintaxis

```css
@media <mediaType> and (<mediaSizes>) and (<mediaSizes>)... {   
    <selector> {
        <prop_css>:<valor>
        ...
    }
}

```

- [MediaTypes](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries#media_types) (Opcional). Si no lo ponemos es `All`.

- `mediaSizes`: Indica el tamaño o característica que debe cumplir el mediaType para que la mediaQuery se aplique.

Ejemplos:

- `max-width: 12450px` ==> La media query se aplica para pantallas de tamaño hasta 12450 pixeles de ancho.

- `min-width: 480px` ==> La media query se aplica para pantallas de a partir de 480px.

- `orientation: landscape` ==> La media query se aplica para pantallas que tengn orientacion apaisada.

## Tips Responsive

- Utilizar la Filosofía `Mobile First`, que te indica que tu maquetación principal se debe hacer para dispositivos mobiles (ya que es lo más usado apra consumir web hoy en día) y luego ir aplicando las media queries según va creciendo la pantalla, utilizando la propiedad `min-width`.

Si además las media queries las pongo en orden creciente podré aprovecharme de la cascada y no tener que poner el limite superior con un `max-width`

- Dentro de una media query solo cambio las propiedades que quiero modificar. Las que ya tenía en la base del css (fuera de la media query) utilizarán la cascada para seguir aplicadas.

## Ejemplo

```css

p {
    color: red;
    font-size: 12px
}


@media (min-width: 480px) {

    p {
        color: green;
        font-size: 18px
    }
}

@media (min-width: 768px) {

    p {
        color: blue;
    }

}

@media (min-width: 1024px) {

    p {
        font-size: 24px;
    }

}



```
