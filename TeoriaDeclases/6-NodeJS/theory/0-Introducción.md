# Introducción

NodeJS es una plataforma para la ejecución de JavaScript en un servidor o en un ordenador, fuera del entorno del navegador.

Nos ayuda a poder crear backends que guarden el estado de nuestro usuario y la información de negocio. Antes de NodeJS no se podía utilizar JS fuera de un navegador.

NodeJS nace en el año 2009.

## Características de NodeJS

- **Full access al SO**: Con un navegador no tendrías acceso al file system y a los dispositivos electrónicos en un sistema operativo (eso está cambiando con un proyecto en fase experimental llamado [Fugu](https://www.youtube.com/watch?v=XwCxIQK4aao)).

- **Orientado a Eventos**: Sigue siendo JS y por tanto sigue siengo single thread. Para no bloquear el hilo principal de JS se utiliza mucha asíncronía y toda operación va lanzando eventos que el desarrollador puede escuchar.

- **Modular**: Cada archivo es un módulo que permiter ser importado por otros archivos y utilizado.

- **Buena gestión de las operaciones I/O**: Las operaciones I/O son las que se conocen como entrada/salida. Por ejemplo la escritura y lectura de un fichero.

## ¿Como ejecuto NodeJS?

1. Crear un archivo JS con el código JS para la plataforma NodeJS. (Utiliza las bases de JS pero no los objetos del navegador).

2. Tener instalado NodeJS en tu SO (Sistema Operativo)

3. Ejecutar el siguiente comando:

> node _filename_.js
