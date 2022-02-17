# I/O Procesos

Un sistema operativo tiene a nivel global 3 elementos de gestión de I/O:

- **Entrada estandar (Input)**: Permite a la aplicación escuchar la información que quiere introducir el usuario.
- **Salida estándar (Output)**: Permite a la aplicación mostrar al usuario información.
- **Salida de error (Output)**: Permite a la aplicación mostrar al usuario errores.

En NodeJS estos 3 elementos de gestión de I/O se pueden utilizar mediante unos objetos llamados `Streams`.

## ¿Que son los Streams?

Son `tuberías` por donde se puede pasar o recibir información. Hay de dos tipos:

- `InputStream`: Es una tubería desde la que podré recibir información.
- `OutputStream`: Es una tubería desde la que podré enviar información.

En nodeJS tenemos eventos para escuchar estos streams, tanto la recepción como el envío de información.

## ¿Donde están esos Streams en NodeJS?

- **Salida Estandar**: El OuputStream se encuentra en el objeto `process.stdout`
- **Salida de Error**: El OutputStream se encuentra en el objeto `process.stderr`
- **Entrada estandar**: El InputStream se encuentra en el objeto `process.stdin`

Escritura en un Stream Writeable

```js
// Escribimos en el Stream de escritura con el método `write`. Solo acepta dos tipos de datos `string` o `Buffer`
process.stdout.write(3.toString());

```

Lectura en un Stream Readable

```js
// leemos utilizando el evento `data`. En el callback nos llegará un objeto de tipo Buffer con la información que ha llegado a través del Stream. Podemos pasarlo a String utilizando el método toString
process.stdin.on('data', chunk => {
    process.stdout.write(chunk);
    process.exit();
});
```
