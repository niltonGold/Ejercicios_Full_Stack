/**
 * modelo con persistencia en BBDD
 */


/**
 * importamos el cliente de mongo para operar con la BBDD
 */
import { MongoClient } from "mongodb";


// url de conexion a la bbdd con la pass de mi usuario
const URI   = 'mongodb+srv://nil1:123@miprimercluster.rssse.mongodb.net/?retryWrites=true&w=majority';

// Creo el cliente
// creamos la isntancia del mongo client con la url de nuestro servidor
// y este cliente ya lo puedo utilizar para conectarnos
const client = new MongoClient(URI);

/**
 * funcion que me devolvera todas las televisiones
 * esta funcion es asincrona porque voy a utilizar promesas
 */
export async function retrieveTVs(){
    try{
    // 1.- me conecto a la BBDD
        await client.connect();

    // una ves conectado puedo hacer el resto de operaciones
    
    // 2.- obtengo la base de datos
        const db = client.db('redsocial');// debo pasarle el nombe de la base de datos
    
    // 3.- obtengo la collection 
        const tvs = db.collection('users');

    // 4.- obtener y devolver los datos de la collection    
        // obtenemos el array de los documentos de esa collection
        return await tvs.find().toArray();// find devuelve un objeto llamado cursor, un objeto iterable

    }catch(err){
        console.log(err);
    }finally{
    // cierro la base de datos pase lo que pase
        await client.close();
    }
}


/**
 * Funcion privada que me filtra por marca,
 * esta funcion es privada, dada una lista de tvs y una brand(marca), quiero que me devuelva
 * las teles filtradas
 */
function queryTVByBrand(tvs, brand) {
    return tvs.filter(tv => tv.brand.toLowerCase() === brand.toLowerCase());
}


/**
 * funcion privada que filtra por pulgadas
 */
 function queryTVByInches(tvs, inches) {
    return tvs.filter(tv => tv.inches >= inches );
}


/**
 * funcion filtrar por marca y por pulgadas 
 */
export async function retrieveTVByBrandAndInches(brand, inches) {
    //llamo a obtener todas las televisiones
    let tvs = await retrieveTVs();
    
    if ( brand ) {
        // si tengo brands llamo a la funcion privada para filtrar por brands
        tvs = await queryTVByBrand(tvs, brand);
    }

    if ( !isNaN(inches) ) { // si no es nan evito tener que recorrerlo si no me han traido nada
        // si tengo inches llamo a la funcion privada para filtrar por inches
        tvs = await queryTVByInches(tvs, inches);
    }

    // si no tengo ni brands ni inches devuelvo todos los televisores
    return tvs;
}






/** 
 * Funcion para acceder a las television por identificador
 * el model.js es el que gestiona los datos
*/

export async function retrieveTVById(id) {
    // obtengo todas las televisiones
    const tvs = await retrieveTVs();

    // return de un find para quedarme con la tv por id
    //busco la tv con ese id 
    return tvs.find(tv => tv.id === id); // si no existe el find me devuelve undefined
    
}



/**
 * funcion para buscar por modelo de tv
 */
export async function retrieveTVByModel(model) {
    const tvs = await retrieveTVs();
    // busco la tv por modelo
    return tvs.find(tv => tv.model.toUpperCase() === model.toUpperCase());
    
}





/**
 * Funcion que me ayude a crear datos
 */
export async function createTv(tv) {

    try{

        // 1.- obtengo los datos actuaes
            const currentTvs = await retrieveTVs();

        // 2.- me conecto a la BBDD
            await client.connect();
    
        // una ves conectado puedo hacer el resto de operaciones
        
        // 3.- obtengo la base de datos
            const db = client.db('redsocial');// debo pasarle el nombe de la base de datos
        
        // 4.- obtengo la collection 
            const tvs = db.collection('users');
    

  


        // 5.- metodo para crear en la BBDD    
            const doc = await tvs.insertOne(tv);

            return doc.insertedId;
    
        }finally{
        // cierro la base de datos pase lo que pase
            await client.close();
        }
}