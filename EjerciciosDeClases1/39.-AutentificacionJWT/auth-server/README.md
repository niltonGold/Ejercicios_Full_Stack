
#Flujo de Auth con JWT

Esto es un proyecto que permite autenticar con el método JWT

Los pasos son:

1.- Crear un endpoint de registro, que creara los usuario en la BBDD
login y registro son partes publicas y las solemos meter dentro de una
carpeta llamada auth(athentification, autentificacion etc) 


2.- Crear un endpoint publico de login, que creara una sesion.

3.- Crear un endpoint privado que solo devuelva información si el usuario tiene sesión activa.

4.-