# Contenedor vs Contenido

Un contenedor es un elemento HTML de bloque, que tiene como hijos otros contenedores o elementos de tipo contenido (textos, enlaces, imagenes, etc).

Un contenido no puede tener otros elementos contenedores.

## ¿Que elementos contenedores hay?

### div

Este es el bloque por excelencia, es una caja donde yo introduzco el contenido u otros bloques.

```HTML
<div>
    <!-- Aqui meto los bloques o contenido dentro de este bloque -->
</div>

```

### Contenedores semanticos (HTML5)

- **Header**: Es un contenedor que representa una cabecera de una web o de una bloque.

```HTML
<header></header>
```

- **Nav**: Es un contenedor que representa un menú de navegación, es decir, una lista de enlaces.

```HTML
<header>
    <!-- En este caso el nav está en el header, pero no siempre tiene que ser así -->
    <nav>
        <ul>
            <li><a href="...">Una página</a></li>
            <li><a href="...">Otra página</a></li>
            <li><a href="...">y Otra página</a></li>
        </ul>
    </nav>
</header>
```

- **Main**: Solo debe haber uno en una página web y representa el contenido principal de la web.

```HTML
<header>
    <!-- En este caso el nav está en el header, pero no siempre tiene que ser así -->
    <nav>
        <ul>
            <li><a href="...">Una página</a></li>
            <li><a href="...">Otra página</a></li>
            <li><a href="...">y Otra página</a></li>
        </ul>
    </nav>
</header>
<main>
    <!-- Contenido principal de la página -->
</main>
```

- **Footer**: Pie de la página o el pie de un contenedor.

```HTML
<header>
    <!-- En este caso el nav está en el header, pero no siempre tiene que ser así -->
    <nav>
        <ul>
            <li><a href="...">Una página</a></li>
            <li><a href="...">Otra página</a></li>
            <li><a href="...">y Otra página</a></li>
        </ul>
    </nav>
</header>
<main>
    <!-- Contenido principal de la página -->
</main>
<footer>
</footer>
```

- **Section**: Representa una seccion de la web, es decir, una parte de la página web.

- **article**: Representa un artículo completo, puede estar dividido en secciones.

- **aside**: Representa un bloque fuera del contenido principal.

## Ejemplo

![HTML4 vs HTML 5](https://1.bp.blogspot.com/-kQwqCrBFw0w/X1AtDnxCuyI/AAAAAAAAAhM/xLj7oWTaCV4VtM9sN4HC1bH5EdUQ4n6FACLcBGAsYHQ/s804/screen-12.png)
