/** 
 * Crear un programa que liste todos los archivos y directorios 
 * de la carpeta Home del usuario que ejecuta el programa,
 * indicando si es archivo o directorio
*/

/**
 * 1- Recuperar la carpeta home, su ruta --> Modulo OS
 * 2- leer el directorio -> readdir de FS. withFileType === true
 * 3- Recorro la lista de elementos y si es directorio pinto una d delante del nombre
 */
import * as os from 'os';
import { readdir } from 'fs/promises';

const homedir = os.homedir(); // recupero la carpeta de usuario

try{
    let items = await readdir(homedir, { withFileTypes: true}); // leo el directorio
    items = items.filter(i => i.isDirectory() || i.isFile());
    items.forEach(i => {
        const dirOutput = i.isDirectory() ? 'd' : 'f';
        console.log(`${dirOutput} ${i.name}`);
    })
}catch(e){
    console.error(e);
}