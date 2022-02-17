import { MongoClient} from "mongodb";




const URI ='mongodb+srv://nilton:123@miprimercluster.rssse.mongodb.net/?retryWrites=true&w=majority';

const client = new MongoClient(URI);


/**
 * Crea un usuario en BBDD
 * @param {object} user 
 */

export async function createUser(user){
    try{
        await client.connect();
        const db = client.db('my-auth-project');
        const collection = db.collection('users');
        await collection.insertOne(user);

    }catch(err){
            console.error(err);
    }finally{
        await client.close();
    }
}


/**
 * Funcion que me valide el usuario por email y pass
 * devuelve true si el usuario existe en BBDD
 * si no se introduce password se buscar solo por email 
 * 
 * lo que va entre los corchetes es el tipo de datos que espero
 * @param {string} email el email del usuario a buscar lo que entre 
 * @param {string} pass opcional el password en texto plano
 * @returns{Promise<boolean>} true si hay un usuario con ese email y esa pass en BBDD
 * estos son los js doc, es para documentar javascript, detecta los parametros
 * de entrada de la funcion
 */
export async function userExists(email, password){
    try{
        await client.connect();
        const db = client.db('my-auth-project');
        const collection = db.collection('users');

        //recojemos los datos, creando una query
        //Esto me esta diciendo que quiero una query por email, cuyo valor sea email
        // y password cuyo valor sea password
        // const q = {email, password}

        // si existe el usuario no puedo volver a registrarlo porque ese usuario ya existe, registrar es crear un usuario en mi BBDD 
        // lo que me esta validando para saber si el usuario ya existia o no en BBDD es comprobar por email y por password, y eso
        // me viene muy bien el login pero no en el registro no porque si alguien me mete el mismo correo y otra password diferente
        // el usuario se creara
        //
        // cuando yo valla a mi BBDD solo lo haga por email y que solo valla por password y alguien me mete el parametro password
        //
        const q = {email};
        if (password !== undefined){
            q.password = password;// los tres puntitos son consejos
        }

        // const q = {email, password: pass}

        // una ves que tengo la query hago de la collection un findone
        const user = await collection.findOne(q);//findOne devuelve null si no existe el dato
        return user !== null;

    }catch(err){
            console.error(err);
    }finally{
        await client.close();
    }
}    



