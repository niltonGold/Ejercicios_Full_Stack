// modelo con persistencia en ficheros
import fs from 'fs/promises';

const MODEL_FILE_PATH = './tv.model.txt';

export async function retrieveTVs() {
    // leo el modelo (los datos)
    try {
        const tvs = await fs.readFile(MODEL_FILE_PATH, 'utf-8');
        return JSON.parse(tvs);
    } catch (err) {
        // si no existe el archivo lo creo vació
        await fs.writeFile(MODEL_FILE_PATH, '[]');
        return [];
    }
}

function queryTVByBrand(tvs, brand) {
    return tvs.filter(tv => tv.brand.toLowerCase() === brand.toLowerCase())
}


function queryTVByInches(tvs, inches) {
    return tvs.filter(tv => tv.inches >= inches);
}

export async function retrieveTVByBrandAndInches(brand, inches) {
    let tvs = await retrieveTVs();
    // elimino las brands solo si hay
    if (brand) tvs = queryTVByBrand(tvs, brand);
    // elimino las inches solo si hay
    if (!isNaN(inches)) tvs = queryTVByInches(tvs, inches);

    return tvs;
}

export async function retrieveTVById(id) {
    const tvs = await retrieveTVs();
    return tvs.find(tv => tv.id === id); // busco la tv con ese id 
}

export async function retrieveTVByModel(model) {
    const tvs = await retrieveTVs();
    // busco la tv con ese model
    return tvs.find(tv => tv.model.toUpperCase() === model.toUpperCase());
}


export async function createTV(tv) {
    const currentTvs = await retrieveTVs();
    // obtengo el ultimo id o 0 si no hay
    const lastId = currentTvs[currentTvs.length - 1]?.id ?? 0;
    // la nueva tv son los datos que me han pasado mas el nuevo id
    const newTv = { ...tv, id: lastId + 1 };
    // añado a la lista de televisiones la nueva television
    currentTvs.push(newTv);
    // persisto la información en el fichero
    fs.writeFile(MODEL_FILE_PATH, JSON.stringify(currentTvs));
    // devolvemos el id del elemento que acabamos de crear
    return lastId + 1;
}
