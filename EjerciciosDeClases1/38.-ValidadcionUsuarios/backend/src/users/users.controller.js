
import { createUsersModel } from './users.model.js'


export async function createUsersCtrl(req, res) {

    
    const id = await createUsersModel(req.body);
    
    if (id === null){
        let mensaje = 'El usuario ya existe';
        res.status(400).send(mensaje);
    }else{
    res.json({id});
    }
}