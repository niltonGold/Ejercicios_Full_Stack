/**
 * importo el modelo
 */

import { createTv, retrieveTVByBrandAndInches, retrieveTVById, retrieveTVByModel, retrieveTVs } from "./tv.model.js"



// las funciones en controller suelen tener el sufijo de Ctrl de controller
// en estas funciones se definen las request req y las response res
// esto es un manejador que devuevlve todas las televisiones

// esta funcion gestiona la peticion, recibe de la request los query
export async function getTVCtrl(req, res) {//

    // la funcion que esta en el modelo me devuelve los datos
    // la funcion del modelo me devuelve una promesa porque es asyncrona
    
    const tvs = await retrieveTVs();

    // obtengo las letevisones y las devuelvo
    res.json(tvs);
}



/**
 * Funcion que crea datos en el archivo
 */
export async function createTvCtrl(req, res) {
    
    // createTV es una funcion que me acepta una television, esa televison me viene en el 
    // body de la peticion
    const id = await createTv(req.body);
    res.json({id}); // esto es lo mismo que {id:id }

}


/**
 * Controlador para buscar una tv por id
 * */
export async function getTVByIdCtrl(req, res) {
    // obtengo el id del path param, es decir lo que escribo en la url
    // llamo a la funcion de mi modelo que me promete que con los datos que gestione me
    // devolvera ese id 
    // obtengo del model la tv con ese id

    const id = parseInt(req.params.id);// el modelo gestiona los ID como number

    // isNaN determina si el valor es nan o no
    // si tenemos un number buscamos por id si no buscamos por modelo
    let tv = !isNaN(id) 
                ? await retrieveTVById(id) 
                : await retrieveTVByModel(req.params.id ?? '');// sin parsear


    // devuelvo al usuario la tv
    if (tv !== undefined){
        res.json(tv);
    }else{
        res.sendStatus(404);//no existe la tv
    }

}

