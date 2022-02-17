/**
 * el controller se encarga de gestionar los handlers de las rutas, es decir los manipuladores
 * de los de las rutas, estoy handlers o manipuladores llamaran los models, que son los que controlan los datos
 */

import { initUsers, createUser } from "./users.model.js";



export async function getUsers(req, res){
    let usuarios = [];
    await initUsers().then( u =>
        usuarios = u );
    res.send(usuarios);    
}

export async function createUserFromPost(req, res){
    const id = await createUser(req.body);
    res.json({id});
}