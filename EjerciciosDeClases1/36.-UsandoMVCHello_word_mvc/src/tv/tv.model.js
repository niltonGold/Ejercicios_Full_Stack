/**
 * modelo con persistencia en ficheros 
 */

import fs from 'fs/promises';
const MODEL_FILE_PATH = './tv.model.json';

/**
 * funcion que me devolvera todas las televisiones
 * esta funcion es asincrona porque voy a utilizar promesas
 */
export async function retrieveTVs(){

    try{
    // leo el modelos (los datos)
        const tvs = await fs.readFile(MODEL_FILE_PATH, 'utf8');// leo en enconding utf8 para que lo pase como string
        return JSON.parse(tvs);
    // hago un json parse de ese modelo para devolver el objeto del modelo
    }catch(err){
        // si falla al devolver el archivo significa que no hay un archivo previo, por lo
        // tanto devuelvo un archivo vacio
        await fs.writeFile(MODEL_FILE_PATH, '[]');
        return [];
    }

}


/**
 * Funcion privada que me filtra por marca,
 * esta funcion es privada, dada una lista de tvs y una brand(marca), quiero que me devuelva
 * las teles filtradas
 */
function queryTVByBrand(tvs, brand) {
    return tvs.filter(tv => tv.brand.toLowerCase() === brand.toLowerCase());
}


/**
 * funcion privada que filtra por pulgadas
 */
 function queryTVByInches(tvs, inches) {
    return tvs.filter(tv => tv.inches >= inches );
}


/**
 * funcion filtrar por marca y por pulgadas 
 */
export async function retrieveTVByBrandAndInches(brand, inches) {
    //llamo a obtener todas las televisiones
    let tvs = await retrieveTVs();
    
    if ( brand ) {
        // si tengo brands llamo a la funcion privada para filtrar por brands
        tvs = await queryTVByBrand(tvs, brand);
    }

    if ( !isNaN(inches) ) { // si no es nan evito tener que recorrerlo si no me han traido nada
        // si tengo inches llamo a la funcion privada para filtrar por inches
        tvs = await queryTVByInches(tvs, inches);
    }

    // si no tengo ni brands ni inches devuelvo todos los televisores
    return tvs;
}






/** 
 * Funcion para acceder a las television por identificador
 * el model.js es el que gestiona los datos
*/

export async function retrieveTVById(id) {
    // obtengo todas las televisiones
    const tvs = await retrieveTVs();

    // return de un find para quedarme con la tv por id
    //busco la tv con ese id 
    return tvs.find(tv => tv.id === id); // si no existe el find me devuelve undefined
    
}



/**
 * funcion para buscar por modelo de tv
 */
export async function retrieveTVByModel(model) {
    const tvs = await retrieveTVs();
    // busco la tv por modelo
    return tvs.find(tv => tv.model.toUpperCase() === model.toUpperCase());
    
}





/**
 * Funcion que me ayude a crear datos
 */
export async function createTv(tv) {

    // obtengo todas las television
    const currentTvs = await retrieveTVs();

    // obteng el ultimo id o 0 si no hay
    const lastId = currentTvs[currentTvs.length-1]?.id ?? 0;

    //la nueva tv son los datos que me han pasado mas el nuevo id
    const newTv = { ...tv, id: lastId +1 };

    // añado la nueva televison al array de currentTvs
    currentTvs.push(newTv);

    // persisto la informacion en el archivo  
    fs.writeFile(MODEL_FILE_PATH, JSON.stringify(currentTvs));

    // es importante que cuando creamos devolvamos el idetificandor que acabamos de crear
    // devolvemos el id del elemento que acabamos de crear
    return lastId+1;
}