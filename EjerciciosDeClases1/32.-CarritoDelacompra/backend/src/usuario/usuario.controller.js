import { initUsers, createUser } from "./usuario.model.js";


/**
 * Manejador que me devuelve todos los usuarios
 */
export async function getUsers(req, res){
    
    let usuarios = [];

    await initUsers().then( u =>
        usuarios = u);
    res.send(usuarios);

    // initUsers().then( u => {    
    //     usuarios = u
    //     res.send(usuarios);    
    // });
    
}



export async function createUserFromPost(req, res){
    // es importate devoler el id
    const id = await createUser(req.body);
    res.json({id});
}