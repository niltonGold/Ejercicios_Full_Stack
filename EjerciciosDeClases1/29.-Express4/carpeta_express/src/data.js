import fs from 'fs/promises';
import { constants } from 'fs';
import axios from 'axios';


export const FILE_DATA_PATH = './province.json';


export async function initProvinceData(){

    try{
        await fs.access( FILE_DATA_PATH, constants.R_OK | constants.W_OK );
        const provincias = await fs.readFile( FILE_DATA_PATH, {encoding: 'utf-8'} );
        return JSON.parse(provincias);
    }catch(err){
        fs.writeFile( FILE_DATA_PATH, '[]' );
        return [];
    }

}


export async function retrieveProcinces(nm){
    const r = await axios.get('https://raw.githubusercontent.com/IagoLast/pselect/master/data/provincias.json')
    return r.data;
}


