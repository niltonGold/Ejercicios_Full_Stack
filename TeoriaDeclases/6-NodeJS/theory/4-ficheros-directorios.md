# Ficheros y directorios

Hasta ahora en NodeJS, hemos guardado la información en variables de Memoria. Las variables de memoria se almacenan en la memoria RAM del ordenador.

El problema de esta memoria es que es volatil y cuando paramos el programa NodeJS limpia toda la "basura" que ha dejado nuestro programa en memoria RAM.

No parece una buena solución para guardar información que queramos que persista.

La solución dentro de un sistema operativo es el uso de `ficheros`.

## ¿Que es un fichero?

Un fichero es un numero finito de información bajo unas mismas características y almacenada en el Disco Duro (HDD o el SSD).

Los ficheros tienen las siguientes características:

- **nombre**: nombre que identifica al fichero en una misma ruta
- **extensión**: es lo que hay despues del último `.` del fichero. Define el formato de ese fichero.
- **ruta (path)**: Localización del fichero dentro del sistema de ficheros del SO, desde la raíz.
  - **absoluta**: es la ruta desde el directorio raíz del SO.
    - **Windows**: empieza por `C:/`
    - **Linux**: empieza por `/`
  - **relativa**: es la ruta que hay desde el directorio actual hasta el fichero/directorio destino.
    - `./`: hace referncia al directorio actual
    - `../`: hace refencia al directorio padre
- **contenido**: datos que contiene. pueden ser de dos tipos:
  - **texto plano**: El contenido tiene un formato de codificación legible al ojo humano.
  - **binario**: Contenido no legible por los editores de texto.
- **permisos**: Indican que usuarios pueden realizar que acciones.
  - ¿Que acciones exiten?
    - Lectura: permite a un usuario leer el contenido del fichero
    - Escritura: permite a un usuario modificar el contenido de un fichero
    - Ejecución: permite al usuario ejecutar el fichero ejecutable
  - ¿Como especifico los usuarios?
    - El usuario dueño del fichero
    - Los usuarios pertenecientes al grupo del dueño del fichero
    - El resto de usuarios

Ejemplo de representación en sistemas linux

```bash
# REPRESENTACION BINARIA
USR GRP ALL
rwx rwx rwx
101 100 000

# REPRESENTACION OCTAL (Cada tipo de usuario especifica sus permisos en Base8 (0-7))
USR GRP ALL
 5   4   0
```

rwx
000 -> 0
001 -> 1
010 -> 2
011 -> 3
100 -> 4
101 -> 5
110 -> 6
111 -> 7

## ¿Qué es un directorio?

Es un contenedor de ficheros y directorios. Nos permite estructurar y jerarquizar la estructura de ficheros de un SO.

Tiene las siguientes características (significan lo mismo que ficheros):

- nombre
- path
- permisos
- contenido: Lista (array) de ficheros y directorios

Nota: *No puede exitir dos directorios con el mismo nombre en la misma ruta*
Nota 2: *No puede existir dos ficheros con el mismo nombre y misma extensión en la misma ruta*

## ¿Como puedo gestionar ficheros y directorios en nodejs?

Para poder trabajar con ficheros (CRUD) y con directorios (CRUD) NodeJS nos proporciona un módulo llamado `fs` con operaciones que nos permiten hacer el CRUD con el File System

### ¿Como importo el módulo fs para trabajar con ficheros y directorios?

```js
// importacion de la libreria si queremos utilizar la forma síncrona o la asíncrona usando callbacks

import * as fs from 'fs';

// o si utilizamos promesas como gestor de la asincronía (lo veremos a continuacion)

import * as fs from 'fs/promises';

```

### ¿Como uso el módulo fs?

El módulo tiene un montón de funciones para poder hacer CRUD a directorios y ficheros.

La operacion de escritura, lectura en ficheros y directorios suele ser una operacion costosa a nivel computacional.

El módulo fs para cada operación tiene 3 formas de uso:

- síncrona
- asíncrona utilizando callbacks
- asíncrona utilizando promesas

[Doc](https://nodejs.org/dist/latest-v16.x/docs/api/fs.html)
