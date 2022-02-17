import { retrieveTVById, retrieveTVByModel } from "./tv.model.file.js";
import {retrieveTVs, createTV} from './tv.model.bbdd.js';


/**
 * Esto es un manejador que devuelve todas las televisiones
 */
export async function getTVsCtrl(req, res) {
    const { brand, inches } = req.query; // deconstruyo el objeto query
    const tvs = await retrieveTVs();
    res.json(tvs);
}


export async function createTVCtrl(req, res) {
    // crea la TV
    const id = await createTV(req.body);
    // devolvemos al usuario el id
    res.json({ id }); // esto es lo mismo que {id:id}
}

export async function getTVByIdCtrl(req, res) {
    // obtengo del modelo la tv con ese id
    const id = parseInt(req.params.id); // el modelo gestiona los ID como number
    // si tenemos un number, buscamos por id sino buscamos por modelo
    const tv = !isNaN(id)
        ? await retrieveTVById(id)
        : await retrieveTVByModel(req.params.id ?? ''); // sin parsear
    if (tv !== undefined) {
        res.json(tv);// devuelvo al usuario la TV
    } else {
        res.sendStatus(404); // no existe la tv
    }
}