/**
 * Dentro del router hay que crear dos rutas principales
 * login y registro
 */

import express from 'express';
import { loginCtrl, registerCtrl } from './auth.controller.js';


const router = express.Router();


// Definir los endpoint register y login
// Definimos un router con los post publicos de login y registro
router.route('/register')
    .post( registerCtrl );

router.route('/login')
    .post( loginCtrl );

export default router;
