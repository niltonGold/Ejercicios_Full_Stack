import express from "express";
import { createUserFromPost } from "./usersBBDD.controller.js";

import multer from 'multer';
const upload = multer({dest: './avatares'});

const router = express.Router();

router.route('/')
    .post(upload.single('avatar'), createUserFromPost);


export default router;    