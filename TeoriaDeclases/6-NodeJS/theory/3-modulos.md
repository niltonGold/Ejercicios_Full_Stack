# Modulos

Cuando JavaScript empezó a ganar popularidad, cada vez más proyectos se realizaban con ese lenguaje de programación.

Como consecuencia los proyectos eran más y más grandes y genera muchos archivos y muchas dependencias entre archivos.

Surge la necesidad de modularizar las aplicaciones JS. (Construir módulos independientes y que juntándolos con otros módulos nos permiten construir algo más grande).

Como no hay forma de modularizar en 2009 JS, El equipo de NodeJS se crea su propio sistema de módulos, llamado  `CommonJS (CJS)`

Este se basa en las siguientes instrucciones:

- `require`: funcion para importa un módulo en un archivo.
- `module.exports`: objeto para exportar información/código de un módulo a otros archivos.

Esto hizo que se crear otros sistemas de módulos hast que el estandar saco en 2015 los EcmaScript Modules (`ESM`) que unificó todos los sitemas de módulos en uno solo y es el que se usa en todas las aplicaciones JS a día de hoy.

- `import` para importar
- `export` para exportar

Note: *Para poder usar los ESM en nodejs, necesitamos un proyecto npm, cuyo package.json tenga en la propiedad `type` el valor `module`*
