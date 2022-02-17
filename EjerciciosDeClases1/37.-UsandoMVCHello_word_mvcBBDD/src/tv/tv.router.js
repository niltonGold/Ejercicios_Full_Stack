import express from "express";

import { createTvCtrl, getTVByIdCtrl, getTVCtrl } from "./tv.controller.js";

const router = express.Router();


router.route('/')
    .get(getTVCtrl)// cuando haga el get llamare al handler de mi controlador
                    // por este get donde obtengo todos
    .post(createTvCtrl);



// ruta para obtener los datos por id 
router.route('/:id')
    .get(getTVByIdCtrl);    

export default router;    