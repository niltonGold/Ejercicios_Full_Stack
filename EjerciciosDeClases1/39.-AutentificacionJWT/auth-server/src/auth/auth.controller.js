import { createUser, userExists } from "./auth.model.js";
import jwt from 'jsonwebtoken';

//clave del token
const secretKey = 'bootcampSuperSecreto';

/**
 * el @ significa que son anotaciones
 * Crea el usuario recibido en la req, si no existe previamente
 * @param {Object<Request>} req 
 * @param {Object<Response>} res 
 */
export async function registerCtrl(req, res){
    //la informacion de la req me viene del body
    //voy a deconstruir el body
    const { email } = req.body;
    // del body me quedo con el atributo email y el atributo password

    const isUser = await userExists(email);
    
    if (isUser ){
        res.sendStatus(409);// es un conflict por que el usuario ya existe en la BBDD 
    }else{
        await createUser(req.body);
        res.sendStatus(201);
    }
}

/**
 * Crea una session JWT para el usuario{email, password} si existe en la BBSS
 * @param {*} req 
 * @param {*} res 
 */
 export async function loginCtrl(req, res){
    const {email, password} = req.body;
    if(await userExists(email, password)){
        /**
         * si el usuario existe entonces
         * 1.-creamos el JWT, añadiendo el email
         * 2.-devolvemos el token al usuario con un 201
         * 
         */
        // en sign no se guardan password, se guardara el email, o por ejemplo roles como administrador y trabajador
        const token = jwt.sign({email}, secretKey);
        res.status(202).json({token});
    }else{
        res.sendStatus(404);
    }
}