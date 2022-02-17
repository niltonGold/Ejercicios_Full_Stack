// modelo con persistencia en BBDD
/**
 * Importamos el cliente de mongo para operar con la BBDD
 */
import { MongoClient } from 'mongodb';
import { URI } from '../../config/bbdd.config';

/**
 * URL de conexión a la BBDD con la pass de mi usuario
 */
// const URI = 'mongodb+srv://demo_bootcamp:demo_bootcamp@learning.c7hty.mongodb.net/?retryWrites=true&w=majority';
/**
 * Creamos la instancia del mongo client con la URL de nuestro servidor
 */
const client = new MongoClient(URI);

export async function retrieveTVs() {
    // leo el modelo (los datos)
    try {
        await client.connect(); // conectamos a la BBDD
        const db = client.db('demo'); // obtenemos la BBDD del cluster utilizando su nombre
        const tvs = db.collection('tvs'); // obtenemos la collection donde guardo los datos
        return await tvs.find().toArray(); // obtenemos el array de los documentos de esa collection
    } catch (err) {
        console.log(err);
    } finally {
        await client.close(); // cierro la conexión pase lo que pase
    }
}

export async function createTV(tv) {
    try{
        await client.connect();
        const db = client.db('demo'); // obtenemos la BBDD del cluster utilizando su nombre
        const tvs = db.collection('tvs'); // obtenemos la collection donde guardo los datos
        const doc = await tvs.insertOne(tv); // método para crear en BBDD
        return doc.insertedId;
    }finally{
        await client.close();
    }
}
