import express from 'express';
import { getUsers, createUserFromPost } from './usuario.controller.js';

const router = express.Router();


router.route('/')// esta ruta es la continuacion de la ruta del app.use
    .get(getUsers)// leera usuarios
    .post(createUserFromPost);// Creara usuario
    
    



// router.route('/:id')
//     .get(getUserById)// leera usuario por id
//     .put(updateUser)// actuzlizara usuarios
//     .delete(erraseUser)// borrara usuario    

export default router;    