# Introducción HTML

HTML (Lenguaje de marcado de hiper-texto) es la forma en la cual escribimos los elementos visuales en una web.

HTML es interpertado por el navegador para generar la UI y `pintársela` al usuario.

HTML es estructurado, es decir, tiene una estructa concreta que ayuda al navegador a saber que tipo de componente quieres pintar.

Para escribir un elemento HTML utilizamos lo que se conoce como etiqueta HTML.

## ¿Que estructura tiene una etiqueta HTML?

Es un elemento que tiene una apertura y un cierre.
Dentro del elemento pueden anidarse más elementos HTML.
Además las etiquetas HTML (que corresponden a un componente), pueden tener atributos, que son características de ese elemento concreto de HTML.

### ¿Como se escribe una etiqueta?

Para abrir una etiqueta HTML debemos poner el nombre de la etiqueta entre los símbolos `<>`

Por ejemplo para un parrafo sería `<p>`

Para cerrar una etiqueta debo envolver el nombre de esa etiqueta entre el símbolo `</>`

Por ejemplo `</p>`

Para poner un atributo, tenemos que escribir su nombre y su valor (entre comillas dobles) en la etiqueta de apertura:

Por ejemplo `<p id="VALOR_PARA_EL_ID">`

```HTML
<p id="MI_PARRAFO_UNICO">Esto es el texto del párrafo</p>
```

## ¿Que es una página web?

Es un archivo HTML. Tiene la extensión `.html` y dentro va la estructura HTML necesaria para visualizar mi web.

Todos los archivos HTML deben empezar con la siguiente estructura:

```HTML

<html> <!-- Etiqueta padre, que define que este archivo es una web -->
    <head> <!-- Información que describe la web, no visible al usuario, pero necesaria para el navegador -->
    </head>
    <body> <!-- Escribo las etiquetas HTML que corresponden a componentes visuales y lo verá el usuario (enlaces, listas, textos, botones, etc...) -->
        <h1>Esto es un título de nivel 1</h1>
    </body>
</html>
```

A todo el conjunto de elementos HTML de una página Web se le conoce como **Arbol DOM**

Los elementos dentro del arbol DOM, tienen una jerarquía y una relación de parentesco.

- Un nodo del DOM que esté dentro de otro, se le conoce como **Nodo Hijo** (child)
- Un nodo del DOM que contiene a otro, se le conoce como **Nodo Padre** (parent)
- Dos nodos que tienen el mismo padre, se les conoce como **Nodo Hermano** (sibling)
- El nodo llamado HTML se le conocoe como **Nodo raíz** (root)

### Pasos para construir una web

1. Creamos una archivo con extensión `.html`
2. Creamos la estructura del DOM base (ver ejemplo arriba) (En VSCode tenemos un shortcut, es el caracter `!` en un archivo vacío)
3. Dentro del body, escribimos nuestros nodos del DOM que queramos para nuestra web

## ¿Que etiquetas HTML existen?

- Titulo de nivel X: `<hX>Texto del título</hX>`, donde X es un número del 1-6, que indica el nivel del título. Produce un salto de línea de manera automática.

[Referencia](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements)

- Párrafo: `<p>Texto del párrafo</p>`, sirve para escribir un texto en forma de parráfo. Produce un salto de línea de manera automática.

[Referencia](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/p)

- Enlaces (hipervínculos): `<a href="URL_DEL_ENLACE">Texto del enlace</a>`. Sirve para poder navegar entre páginas y sitios web. Cuando el usuario hace click, se produce una navegación al HREF. Si queremos que el enlace se abra en pestaña nueva, tenemos que dar valor al atributo `target`, con valor `_blank`

[Referencia](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a)

- Imagenes: `<img src="URL_IMG" alt="Texto_alternativo" />`, pinta una imagen en el navegador.

[Referencia](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img)

- Listas: hay dos tipos de listas (ordenadas, no ordenadas). Representan elementos relacionados o pasos (en caso de una lista ordenada)
  - Ordenada: `<ol></ol>`
  - No ordenada: `<ul></ul>`
  - Cada elemento de una lista (da igual su tipo) se escribe: `<li></li>`, dentro de su tipo de lista (como hija)

```HTML
<ol> <!-- primero especifico el tipo de lista que es (ordenada en este caso) -->
 <li>Primer elemento</li> <!-- Primer elemento de la lista -->
 <li><a href="https://google.com">Enlace a Google</a></li> <!-- Segundo elemento de la lista, que casualmente es un enlace -->
</ol>
```

[Referencia ol](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ol)
[Referencia ul](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul)
[Referencia li](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/li)

- Tablas:
  - `<table></table>`: Indica que empieza una tabla
  - `<th></th>`: Indica que ahi está el encabezado de una tabla
  - `<tr></tr>`: Indica una fila de una tabla
  - `<td><td>`: Indica una celda dentro de la fila

```HTML
<table>
  <tr>
    <th>Company</th>
    <th>Contact</th>
    <th>Country</th>
  </tr>
  <tr>
    <td>Alfreds Futterkiste</td>
    <td>Maria Anders</td>
    <td>Germany</td>
  </tr>
  <tr>
    <td>Centro comercial Moctezuma</td>
    <td>Francisco Chang</td>
    <td>Mexico</td>
  </tr>
  <tr>
    <td>Ernst Handel</td>
    <td>Roland Mendel</td>
    <td>Austria</td>
  </tr>
  <tr>
    <td>Island Trading</td>
    <td>Helen Bennett</td>
    <td>UK</td>
  </tr>
  <tr>
    <td>Laughing Bacchus Winecellars</td>
    <td>Yoshi Tannamuri</td>
    <td>Canada</td>
  </tr>
  <tr>
    <td>Magazzini Alimentari Riuniti</td>
    <td>Giovanni Rovelli</td>
    <td>Italy</td>
  </tr>
</table>
```

[Referencia](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table)

- Estilizar texto:

  - `<b></b>`: Negrita. No indexable por google. [Ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/b)
  - `<i></i>`: Cursiva. [Ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/i)
  - `<em></em>`: Como una negrita, pero de manera semántica, para dar enfasis. [Ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/em)
  - `<strong></strong>`: Como una negrita, pero de manera semántica, para dar mucho enfasis. [Ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/strong)

- Entrada Del usuario: `<input type="" />`, te permite recibir información del usuario. Hay muchos tipos:
  - `text`: permite al usuario escribir texto libre de una sola línea
  - `email`: permite al usuario escribir emails
  - `date`: permite al usuario seleccionar una fecha
  - [Resto](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input)

[Referencia](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input)

- Selección de un listado: `<select>` para el selector, `<option>` para las opciones del selector. son hijos del elemnto `select`

 [Referencia](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select)

- Texto de mas de una fila: `<textarea>` me permite indicar las filas y las columnas del texto que quiere intoducir el usuario

 [Referencia](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea)
