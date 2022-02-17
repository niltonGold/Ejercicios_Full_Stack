# CSS

Nos permite personalizar la web y controlar como se deben mostrar los elementos visuales de HTML.

- Colores
- Tipos de fuentes
- Tamaños
- Espacios entre bloques y elementos
- Posicionamiento
- animaciones.

Para poder dar estilo a un elemento HTML necesito darle valor a sus propiedades CSS.

## Propiedades CSS

Es la caracteristica de un nodo del DOM que quiero modificar.

Su estructura es `<nombre>:<valor>;`

Donde el nombre es la característica concreta, de las que se pueden modificar definicas en el estandar CSS.

El valor es lo que queremos que valga esa característica, dentro de lso posibles valores que te permite CSS para ese `nombre`

![Estructura de una propiedad CSS](https://web-dev.imgix.net/image/VbAJIREinuYvovrBzzvEyZOpw5w1/hFR4OOwyH5zWc5XUIcyu.svg).

## ¿Como puedo agregar una propiedad CSS a un elemento HTML?

### Atributo Style de un elemento HTML

Todos los elementos HTML (visuales) tiene un atributo `style` en el que puedo indicarle las propiedades CSS que quiero cambiar de ESE elemento.

```HTML

<p style="color:red;">Este es mi texto rojo</p>

```

### Utilizando el tag HTML `<style>`

Existe una etiqueta (con apertura y cierre) en el que dentro puedo meter los estilos CSS.

Esta etiqueta la puedo colocar en cualquier parte del `<head>` o del `<body>`.

Para poder decirle al navegador, el/los elementos de HTML que quiero estilizar debemos usar un `selector CSS`

```HTML
<style>
    /**
    * Aqui va mi CSS
    **/
</style>

```

### haciendo link de un archivo CSS

Para evitar duplicidades y poder reutilizar el código CSS que creemos, podemos llevarnos el contenido de la etiqueta style, a un archivo aparte con extensión `.css`.

Para decirle al navegador, que CSS vamos a usar, necesito ENLAZAR (link)
el archivo CSS, con su documento HTML a través de un tag HTML llamado `link`, donde le especificamos la URL del archivo css.

```css
/**
* Contenido del archivo `style.css`
*/
```

```HTML

<link rel="stylesheet" href="<URL>/style.css">


```

## Selectores CSS

Nos permite indicarle al navegador que elementos del HTML quiero seleccionar, para luego poder aplicarle las `propiedades` CSS.

### Selector de tag HTML

Nos ayuda a seleccionar todos los elemento HTML que coincidan con esa etiqueta HTML en la página web.

se utiliza simplemente poniendo el nombre de la etiqueta.

```css
p {
  /* Todas las propiedades que meta dentro de este bloque, afectan a todos los `p` de la página. En el ejemplo todos los p's serán rojos */
  color: red;
}

a {
  /* Todas las propiedades que meta dentro de este bloque, afectan a todos los `a` de la página. En el ejemplo todos los a's serán rojos */
  color: green;
}
```

### Selector de ID HTML

Nos permite selección el elemento que tenga un atributo ID con un valor concreto.

Para poder utilizarlo, necesito poner el valor del ID como selector precedido de una almohadilla (#).

```css
#mi-elemento-unico {
  /* Cambio el color del elemento HTML cuyo id tiene un valor `mi-elemento-unico` */
  color: green;
}
```

```html

<p id="mi-elemento-unico">Color  a verde</p>

```

### Clase CSS

Es un `alias` que le damos a los elementos HTML y con ese alias podemos luego usarlo como selector y así indicar que todos los elementos (da igual su etiqueta y su id) que tengan esa clase, modificar ciertas propiedades CSS.

El nombre alias (clase css) lo elegimos nosotr@s como desarrollador@s.

- Para asignarle ese alias a un elemento HTML utilizo el atributo `class`, cuyo valor será la/las clases CSS que tenga asignadas.

- Para seleccionar en el CSS esos alias, debo poner en el selector el nombre de la clase css, precedido por un `.`.

¿Se puede dar mas de un alias a un elemento HTML?

Si. separando con espacios dentro del atributo class, los nombres de las clases CSS.

```CSS

.clase_css_1 {
    color: green;
}

.clase_css_2 {
    color: blue;
}

.clase_css_3 {
    width: 100px;
}

```

```html

<p class="clase_css_1">Eso es solo verde</p>
<p class="clase_css_2 clase_css_3">Eso es azul y tiene un ancho de 100px</p>

```

### Selector universal

Selecciona TODOS los elementos HTML y consiste en básicamente en escribir en el CSS (archivo o style) el caracter `*`.

Se utiliza para un termino que se conoce como `resets` que elimina el CSS que introduce el navegador por defecto

```CSS
*{
    color:blue
}

/* EJEMPLO DE RESET */

* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

```
