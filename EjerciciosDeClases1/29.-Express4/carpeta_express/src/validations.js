/**
 * en este archivo guardare las validaciones
 */


// exporto algo de la app
export function validateProvinceName(provincias, nombre){
   
    return provincias.some(p => p.nm.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase() === nombre); 
}





