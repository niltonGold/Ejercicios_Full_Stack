# Autenticación y autorización

La autenticación es el proceso por el cual un usuario asegura ser quien dice ser frente a un sistema.

La autorización es el proceso por el cual cuando un usuario ya autenticado quiere operar con un recurso, el sistema valida si éste tiene persmisos o no.

Cuando intento operar con un recurso, estoy autenticado y no tengo permisos, el sistema debe devolver un 403 Forbidden.

Cuando intento operar con un recurso y no estoy autenticado, el sistema debe devolver un 401 Unauthorized.

## Métodos de autenticación

Hay muchos métodos y formas para autenticar a un usuario en un sistema, en clase vamos a ver 4.

### Autenticación Basic (Insegura)

Esta es la autenticación más básica. Se basa en el uso de usuario y password como factores de autentiación.

Para poder realizar la autenticación basic la podemos realizar de dos maneras:

- *Muy insegura*: Consiste en introducir el usuario y la password antes del host cuando conectamos con un sistema. La información no está cifrada aunque utilicemos HTTPS.

ej: `https://user:pass@my.system.com/resource`

- *Insegura*: Consiste en introducir el usuario y la password en una cabecera. El nombre de la cabecera es [`Authorization`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Authorization) y el valor de la cabecera es el string `Basic user:pass` con el user y pass codificado en base64.

Ejemplo: para el usuario y password `alex:pass`, su codificación a base64 es la siguiente `YWxleDpwYXNz`, por tanto la cabecera tendrá el siguiente valor:

`Authorization: Basic YWxleDpwYXNz`

El servidor debería leer la cabecera, decodificar el Base64 y obtener la información

para codificar o decodificar en nodeJS [base64 NodeJS](https://attacomsian.com/blog/nodejs-base64-encode-decode).

para codificar o decodificar en Browser [Base64 browser](https://developer.mozilla.org/en-US/docs/Glossary/Base64)

### Autenticación utilizando API Key

Consiste en la generación de un sting único que identifica a un consumidor de un API.

No deberíamos nunca definir el API en el query string o en la URL, ya que iría en texto plano por la red

Para securizar un poco más las peticiones al API tenemos dos opciones:

- **Authorization Header**: `ApiKey apiKeyStringToken` (Esta es la que mas me gusta)
- **X-API-KEY (Custom Header)** : `apiKeyStringToken`

_Las cabeceras que empiezan por `X`, significa que no pertenecen a las cabeceras definidas por HTTP y son cabeceras propias de mi sistem_

¿De donde saco el API Key?

Depende del sistema y quien lo diseñe, pero habitualmente suele existe una web de administración donde los desarrolladores del cliente que realiza peticiones al backend pueden generar este API Key e incluirlo en las peticiones de su cliente.

### Autenticación basada en JWT

Consiste en tres fase principales:

1. Permitimos al usuario autenticarse con sus factores de autenticación (password, OTP, Email, Huella, etc). Una vez que nos hemos asegurado que el usuario es quien dice ser, generamos un string con un formato especifico llamado `token JWT` y se lo devolvemos al cliente.

2. El cliente recibe el token JWT y lo incluirá en todas las peticiones al API, dentro de la cabecera de `Authorization`.

    ej: `Authorization: Bearer jwtTokenDevueltoPorElBackend`

    El servidor además genera otro token JWT. ¿Porque?.

    La idea es que un token JWT tenga una caducidad en el tiempo, por lo que el servidor genera dos token JWT. El token de acceso (`access_token`) y otro token de refresco (`refresh_token`). El token de refresco nos permite generar un nuevo `access_token` cuando este caduca.

3. Si el token ha caducado, el cliente debe generar un nuevo `access_token` utilizando su `refresh_token`.

¿Que es un JWT?

Es un string que está divido en 3 substrings (cabacera, payload, firma) [JWT io](https://jwt.io/)

¿Como genero y valido el JWT?

Aunque hay varias librerías, utilizaremos la siguiente para poder generar y verificar JWT en NodeJS [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)

`npm install jsonwebtoken`
