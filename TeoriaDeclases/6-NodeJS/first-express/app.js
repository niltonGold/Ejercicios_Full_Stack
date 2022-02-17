/** Crear servidor express
 * 
 * 1- import modulo
 * 2- crear la app
 * 3- definir rutas
 * 4- ejecutar el listen de la app
 */
import express from 'express';
import { homedir } from 'os';
import { writeFile } from 'fs/promises';

const app = express();

app.use(express.json()); // nos permitia poder recibir el body en formato JSON

app.get('/demo', (req, res) => {
    res.send(`Mi primera ruta`); // status por defecto 200
});

app.post('/demo', (req,res) => {
    let msg = 'El numero es par';
    if(req.body.data%2 === 1){
       msg = 'El número es impar';
       res.status(400);
    }
    res.send(msg);
});

app.post('/flight', (req, res) => {
    writeFile(`${homedir()}/flights.json`, JSON.stringify(req.body));
    res.sendStatus(201);
});

app.listen(3000, () => console.log('Servidor Creado'))