// import fs from 'fs/promises';


//importamos el cliente de mongo para operar con la BBDD
import { MongoClient } from "mongodb";

const MODEL_FILE_PATH = 'users.json';


/**
 * 
 * url de conexion a la base de datos
 */
const URI  = 'mongodb+srv://nil1:123@miprimercluster.rssse.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

// creamos la instancia del mongo cliente con la url de nuestro servidor 
const client = new MongoClient(URI); // este cliente ya lo podemos utilizar para conectarnos 

/**
 * Esta funcion devolvera los datos de un archivo, en caso de que el archivo no existe
 * devolvera un archivo vacio
 */

// export async function initUsers(){
//     try{
//         const users = await fs.readFile(MODEL_FILE_PATH, 'utf-8');
//         return JSON.parse(users);
//     }catch(err){
//         await fs.writeFile(MODEL_FILE_PATH, '[]');
//         return '[]';
//     }
// }





/**
 * Esta funcion devolvera datos que tenga en la BBDD mongoDB
 */

export async function initUsers(){
    try{
        // neceitamos primero un conect
        await client.connect();

        // una ves conectado puedo hacer el resto de operaciones
        // obtengo la base de datos, le paso el nombre de la base de datos
        const db = client.db('redsocial');

        // obtengo la colleccion donde guardo los datos
        const usuarios = db.collection('users');

        // una ves obtenida la conexion quiero obetener todos los datos
        return await usuarios.find().toArray();// obtenemos el array de los documentos de esa collection

    }catch(err){
        console.log(err);
    } finally{
        await client.close();//cierro la conexion pase lo que pase
    }
}








// export async function createUser(usuario){
//     const currentUsers = await initUsers();
//     const lastId = currentUsers[currentUsers.length-1]?.id ?? 0;
//     const newUser = { ...usuario, id: lastId + 1};
//     currentUsers.push(newUser);
//     fs.writeFile(MODEL_FILE_PATH, JSON.stringify(currentUsers));
//     return lastId +1; 
// }


export async function createUser(usuario){

    try{
        const currentUsers = await initUsers();
        await client.connect();
        const db = client.db('redsocial');
        const usuarios = db.collection('users');
        const lastId = currentUsers[currentUsers.length -1]?.id ?? 0;
        const newUser = {...usuario, id: lastId + 1};
        await usuarios.insertOne(newUser);
        return lastId +1;

    }finally{
        await client.close();
    }
    
}