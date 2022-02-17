import { MongoClient } from "mongodb";

const URI = 'mongodb+srv://nil1:123@miprimercluster.rssse.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(URI);





export async function retrieveUsers(){
    try{
        await client.connect();
        const db = client.db('redsocial');
        const users = db.collection('users');
        return await users.find().toArray();

    }catch(err){
        console.log(err);
    }finally{
        await client.close();
    }
}





export async function createUsersModel(user){

    try{
        const currentUsers = await retrieveUsers();

        console.log('usruario introducido por por postman ' + user.email);

        const userAux = currentUsers.find( e => e.email === user.email );
        // buscara en los usuarios actuales y me devolvera un usuario si es el mismo que introduci por postman
        // si no encuentra el devolvera un undefined
        console.log(userAux);
        
        if ( userAux === undefined){
            await client.connect();
            const db = client.db('redsocial');
            const users = db.collection('users');
            const doc = await users.insertOne(user);// en esta parte inserto en la coleccion el usuario nuevo
            return doc.insertedId;  
        }else{
            return null;
        }

    }finally{

        await client.close();

    }
}