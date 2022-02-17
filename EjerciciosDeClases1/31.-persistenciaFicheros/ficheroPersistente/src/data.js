
import fs from 'fs/promises';
import { constants } from 'fs';

export const FILE_DATA_PATH = './cursos.json';


export async function initCurseData(){

    try{
        await fs.access( FILE_DATA_PATH, constants.R_OK | constants.W_OK );
        const cursos = await fs.readFile( FILE_DATA_PATH, {encoding: 'utf-8'} );
        return JSON.parse(cursos);
    }catch(err){
        fs.writeFile( FILE_DATA_PATH, '[]' );
        return [];
    }

}