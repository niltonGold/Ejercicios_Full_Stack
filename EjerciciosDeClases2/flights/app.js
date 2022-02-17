import express from 'express';
import fs from 'fs/promises';
import { FILE_DATA_PATH, initFlightsData, retrieveAirports } from './src/data.js';
import { validateIATACode } from './src/validations.js';

const app = express();
app.use(express.json());
let flights = []; // variable global que tiene los datos de mi sistema
let airports = []; // variable global para guardar los datos de la lista de aeropuertos

// inicializo mi variable global de datos con lo que haya en el fichero
initFlightsData().then(f => flights = f);

// inicializo la variable de aeropuertos al levantar el servidor
retrieveAirports().then(a => airports = a);

/** DEFINO RUTAS */
app.get('/flights', (req, res) => {
    // devuelvo todos los flights. vamos a permitir filtar por origen
    // usamos query param para el filtro
    const origin = req.query.origin;
    const filteredFlights = origin === undefined 
        ? flights 
        : flights.filter(f => f.origin === origin);
    console.log(req.get('X-BOOTCAMP-CHAO'));
    res.json(filteredFlights);
});

app.get('/flights/:id', (req, res) => {
    /*
    * 1. recuperar el path param (req.params.id)
      2. recorro mi array para buscar el vuelo que tenga id === path param
      3. devuelve un 200 si existe con los datos
      4. devuelveo un 404 si no existe
    */
    const flight = flights.find(f => f.id === parseInt(req.params.id)); // paso 2
    res.status(flight !== undefined ? 200 : 404);
    res.json(flight);

});

app.post('/flights', (req, res) => {
    /*
    * 1- recupero el ultimo id de mis datos
      2- obtengo la información del vuelo del body
      3- genero un objeto con el body + el nuevo id
      4- añado al array este nuevo vuelo al final
      5- sobreescribo el archivo con la nueva información (persisto la info)
    */
    // obtengo el id del ultimo vuelo o 0 si no hay vuelos
    // operador de optional chaining para el array y
    // nullish operator para la inicialización
    const lastId = flights[flights.length - 1]?.id ?? 0;
    if (!validateIATACode(airports, req.body.origin)) {
        // si no es válido el origin, devolvemos al usuario error
        res.status(400).json({ msg: 'El origin no es un código IATA valido' });
    } else if (!validateIATACode(airports, req.body.destination)) {
        res.status(400).json({ msg: 'El destination no es un código IATA valido' });
    } else {
        // genero el objeto con el id
        const flight = { ...req.body, id: lastId + 1 };
        // añado el nuevo vuelo al array
        flights.push(flight);
        // Sobreescribo en el archivo todos vuelos de nuevo
        fs.writeFile(FILE_DATA_PATH, JSON.stringify(flights));
        // mando al usuario un 201 (created) con el id del vuelo creado
        res.status(201).json({ id: flight.id });
    }

});

app.delete('/flights/:id', (req, res) => {
    /*
    * 1- recuperar el id
    * 2- recorrer el array buscando y eliminando el vuelo
    * 3- si existe actualizar el archivo con la nueva informacion y devolver un 200
    * 4- si no existe devolver un 404
    */
    // busco el indice del vuelo que me pide borrar el usuario
    const i = flights.findIndex(f => f.id === parseInt(req.params.id));
    if (i >= 0) {
        // existe el vuelo
        flights.splice(i, 1); // borro el vuelo
        // Sobreescribo en el archivo todos vuelos de nuevo
        fs.writeFile(FILE_DATA_PATH, JSON.stringify(flights));
        // aviso al usuario mandando un 200
        res.sendStatus(200);
    } else {
        // no existe el vuelo que intenta borrar y mando un 404
        res.sendStatus(404);
    }
});

app.listen(1675, () => console.log('Bootberia te lleva a casa con su servidor'))
