
import express from 'express';
import tvRouter from './src/tv/tv.router.js'


const app = express();// 

app.use(express.json());// uso el middleware del jason para poder procesar el body del json

app.use('/tvs', tvRouter)



app.listen(3001, () => console.log('Escuchando server ok'))