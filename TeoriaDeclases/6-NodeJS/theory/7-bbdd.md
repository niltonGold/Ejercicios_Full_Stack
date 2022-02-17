# BBDD

Es una aplicación o servidor de aplicación que optimiza la gestión de lo datos de una empresa. Es la manera que tenemso en las aplicaciones web de persistir la información.

Están muy optimizadas para su cometido y por eso se utilizan en vez de usar ficheros.

En esta aplicación almacenaremos los datos del negocio, lo más importante de una empresa.

Para comunicarnos con una BBDD desde nuestro servidor, utilizaremos librerías, ya que el protocolo de comunicación no es HTTP, sino protocolos propios de la BBDD.

## Tipos de BBDD

Fundamentalmente existen dos tipos de BBDD: relaciones y no relacionales.

- **relacionales**: mantienen una relación fuerte entre los datos. Las entidades se guardan en tablas y las tablas se relacionan unas con otras. Para el diseño de la BBDD se utiliza un diagrama entidad-relación.

![Ejemplo diagrama entidad-relacion](https://i.blogs.es/2b4f5a/gbd-entero/1366_2000.png)

Utilizan un lenguaje de programación propio que es PL-SQL. Hay de pago y opensource. Como ejemplos tenemos: Oracle SQL, SQLServer, MySQL, MariaDB o PostgreSQL

- **No relacionales**: Es como un cajón desastre que contiene el resto de BBDD. No utilizan SQL (en general) y tenemos varios motores opensource: MongoDB, Cassandra o Hadoop(big data)

## MongoDB

Mongodb es una BBDD NoSQL basa en documentos. Gestiona la información como si fuesen objetos JSON y su uso con NodeJS es muy sencillo.

No permite generar relaciones entre colecciones.

Las colecciones son un conjunto de documentos del mismo tipo.

BBDD
 Collection_1
  Document_1
  Document_2
 Collection_2
  Document_1
  Document_2
  Document_3

Podemos ver las colecciones como si fuesen arrays y los documentos como si fuesen objetos.

Para conectarnos a una BBDD MongoDB desde nodeJS debemos utilizar su driver oficial llamado [mongodb](https://www.npmjs.com/package/mongodb)

Nota: *En ejemplos por internet podréis ver el uso de otro driver llamado Mongoose, que es el driver que se ha utilizado históricamente*

### Crear una BBDD MongoDB

Tengo dos opciones:

1. Instalar y levantar el servidor en mi ordenador local.

2. Crear la BBDD en el cloud que te propociona MongoDB. (Esta es la que vamos a usar)

### Pasos para integrar MongoDB utilizando el driver oficial

1. Crear un proyecto npm
2. Instalar el driver
    > npm install mongodb
3. Obtener la URL del cluster para conectar tu aplicación a la BBDD
4. Contectar
    - Importar `MongoClient` de la librería
    - Crear una instancia de la clase MongoClient pasándole la URL
    - En la funcion en la que necesitamos operar con los datos de la BBDD:
        - Ejecutar la función connect
        - Seleccionar la `db` que queremos
        - Seleccionar la `collection` que queremos
        - Ejecutar la operación en esa collection (CRUD) 
