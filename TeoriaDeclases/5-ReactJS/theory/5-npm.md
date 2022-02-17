# NPM

Es una aplicación que ayuda a gestionar las dependencias de un proyecto JavaScript.

Para poder hacerlo neceita que el proyecto tenga un archivo llamado `package.json` con la definición del proyecto JS (name, version, un array de dependencias, ...)

**Cualquier comando npm (menos el init) sobre un proyecto JS se tiene que ejecutar en el directorio donde está el archivo package.json**

## ¿Como inicio/creo un proyecto npm?

En el directorio donde quiero crear el proyecto utilizo el comando:

> npm init

Este comando me va a hacer preguntas sobre la configuración del proyecto. Cuando termine, creará un archivo `package.json` con la información introducida.

## Instalando dependencias en el proyecto

Para poder utilizar en mi proyecto una librería del "market", debo poner en **mi proyecto** el comando

> npm install _nombre_de_la_libreria_

o utilizando un shortcut

> npm i _nombre_de_la_libreria_

### ¿Qué hace este comando?

Este comando va a hacer lo siguiente (fundamentalmente):

- añadir al package.json el nombre de la librería con su version
- meter en una carpeta llamada `node_modules` el código de la librería para su uso en el proyecto.
- crear/añadir la referencia de la librería en un archivo `package-lock.json` (este no lo tocamos nunca como desarrolladores, es interno de npm).