import fs from 'fs/promises';


const MODEL_FILE_PATH = 'user.json';



/**
 * Funcion que recuperara los datos, en el caso de que no hayan datos
 * se creara un archivo vacio
 */
export async function initUsers(){
    try{
        console.log('ha entrado el get')
        const users = await fs.readFile(MODEL_FILE_PATH, 'utf-8');
        console.log('inituser'+users);
        return JSON.parse(users);
    }catch(err){
        await fs.writeFile(MODEL_FILE_PATH, '[]');
        console.log('error');
        return '[]';
    }
}




/** 
 * Funcion para crear un usuario desde post
*/
export async function createUser(usuario){
    //compruebo si hay ya usuarios en la base de datos,
    // -Si hay usuarios recuperare todos los usuario
    // -Si no hay usuario inicializare un base de datos de usuario vacia
    console.log(usuario);
    const curretUsers = await initUsers();


    // agregar un id a cada usuario de manera ordenada
    const lastId = curretUsers[curretUsers.length -1]?.id ?? 0;


    // cada nuevo usuario debe estar identeficado con un id unico
    const newUser = { ...usuario, id: lastId + 1 };

    // agregar al array de usuarios actual el nuevo usuario
    curretUsers.push(newUser);

    // escribo el array de usuarios actulizado en el fichero
    fs.writeFile(MODEL_FILE_PATH, JSON.stringify(curretUsers));

    // devolvemos el id del elemento que acabamos de crear
    return lastId + 1;
}

