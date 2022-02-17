# Selectores avanzados

Hasta ahora solo podiamos seleccionar un elemento por su id, etiqueta, clase o utilizando el selector universal.

Pero. ¿Como obtengo el primer hijo del div con la clase .container?

## Simbolos

Supongamos que tenemos el siguiente ejemplo:

```html
<div class="container">
  <p>Apple</p>
  <div>
    <p>An apple a day keeps doctor away!</p>
  </div>
  <p>Banana</p>
  <p>Cherry</p>
</div>
```

### Diferencia entre descendiente e hijo

Un `descendiente` de un elemento es cualquier nodo del DOM que se encuentre dentro de ese elemento a cualquier nivel de profundidad.

En el ejemplo anterior, todos los elementos del DOM que están dentro de el div `.container` son descendientes (los 4 `p` y el `div` que no tiene clase).

Un hijo de un elemento son los nodos del DOM que se encuentran dentro de este elemento en el primer nivel de profundidad.

En el ejemplo anterior, los `p` Apple, Banana y Cherry + el `div` que no tiene clase son hijos del div `.container`. El `p` dentro del `div` sin clase NO es hijo.

### Descendant Selector (Espacio)

Separar dos selectores por un espacio te permite seleccionar todos los descendientes del primer selector que cumplan el segundo selector.

En el ejemplo anterior el selector `.container p` te permite seleccionar todos lso descendientes de `.container` que sean `p`.

### Child Selector (>)

El mayor que te permite seleccionar los hijos del primer selector que cumplan el segundo.

En el ejemplo anterior el selector `.container > p` te permite seleccionar todos los hijos de `.container` que sean `p`, es decir afectaría a 3 elementos.

### Adjacent Sibling Selector (+)

Selecciona el primer elemento que hay a continuación del que cumple con el primer selector, que cumpla con el segundo

En la imagen el punto verde indica que se selecciona, y el punto rojo que NO se selecciona

![Sibling Adjacente](https://miro.medium.com/max/875/1*6ZqTke0Xxx2cqG0BKW1Pgw.png)

### General Sibling Selector (~)

Selecciona los hermanos del primer selector que cumplan con el segundo selector y aparezcan **despues** que el elemento del primer selector.

En el ejemplo, div ~ p, afectaría a los dos últimos p's

En la imagen el punto verde indica que se selecciona, y el punto rojo que NO se selecciona

![General Sibling](https://miro.medium.com/max/875/1*nP_JuBuL32UkoIVY9nJdzg.png)

[Referencia](https://levelup.gitconnected.com/understanding-use-of-the-and-symbols-in-css-selectors-95552eb436f5)

## Selectores de atributo

Nos permite seleccionar elementos HTML en función de algn atributo del elemento.

Se utilizan los corchetes para poder indicar el atributo que quiero elegir.

Por ejemplo

```html
<p data-custom-attribute="hola">Este se selecciona</p>
<p data-custom-attribute="adios">Este NO se selecciona</p>
<p>Este NO se selecciona</p>

<style>
  /* Selecciono los p's que tengan data-custom-attribute igual a  'hola' */
  p[data-custom-attribute="hola"] {
    color: green;
  }
</style>
```

## pseudo-clases

Me permiten poder estilizar diferentes estados que pueda tener un elemento HTML cuando el usuario interactua con el.

Se escribe poniendo `:` + el nombre de la pseudoclase.

Algunos ejemplos

- [:hover](https://codepen.io/web-dot-dev/pen/vYgJyNP)
- [:active](https://codepen.io/web-dot-dev/pen/YzNxpam)
- :focus=> https://codepen.io/web-dot-dev/pen/WNREoyj
- :disable :enable => https://codepen.io/web-dot-dev/pen/yLgogPG
- :invalid => https://codepen.io/web-dot-dev/pen/QWdMpaL
- :first-child :last-child => https://codepen.io/web-dot-dev/pen/YzNxZRO
- :nth-child(n) => https://codepen.io/web-dot-dev/pen/GRrvWbL

## pseudo-elementos

Permite seleccionar elementos visuales que pone el navegador que no son elementos HTML.

Se estilizan escribiendo `::` + el nombre del pseudo-elemento.

- ::before ::after
- ::first-letter => https://codepen.io/web-dot-dev/pen/PoWjybP
- ::first-line => https://codepen.io/web-dot-dev/pen/vYgZVaO
- ::marker => https://codepen.io/web-dot-dev/pen/MWJozrR
- ::selection => https://codepen.io/web-dot-dev/pen/JjEJeZK
- ::placeholder => https://codepen.io/web-dot-dev/pen/KKaqrrY
