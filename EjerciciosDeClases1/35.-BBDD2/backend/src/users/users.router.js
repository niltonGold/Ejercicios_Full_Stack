/**
 * El router se encarga de definir las rutas y darle asignarles a las rutas controladores
 */

import express from "express";
import { createUserFromPost } from "./users.controller.js";

import multer from 'multer';
const upload = multer({dest: './avatares'});


const router = express.Router();

router.route('/')
    .get(getUsers)
    .post(upload.single('avatar'), createUserFromPost);

  
export default router;    