import fs from 'fs/promises';
import { constants } from 'fs';
import path from 'path';
import axios from 'axios'; // librería que me permite hacer peticiones http a otros servidores

export const FILE_DATA_PATH = path.dirname(process.argv[1]) + '/flights.json';

export async function initFlightsData() {
    try {
        // compruebo si el archivo existe y ademas tengo permisos
        // de escritura y lectura en el
        await fs.access(FILE_DATA_PATH, constants.R_OK | constants.W_OK);
        // leo el contenido del archivo. como le pongo encoding el formato de respuesta
        // es un string en vez de un buffer
        const flights = await fs.readFile(FILE_DATA_PATH, { encoding: 'utf-8' });
        return JSON.parse(flights);
    } catch (err) {
        // si el archivo no existe o no tengo permisos, creo un archivo vacio
        fs.writeFile(FILE_DATA_PATH, '[]');
        return [];
    }
}

export async function retrieveAirports() {
    const r = await axios.get('https://gist.githubusercontent.com/tdreyno/4278655/raw/7b0762c09b519f40397e4c3e100b097d861f5588/airports.json')
    return r.data;
}