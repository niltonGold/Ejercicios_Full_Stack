import express from "express";
import tvRouter from './src/tv/tv.router.js';

const app = express();

app.use(express.json());

app.use('/tvs', tvRouter);

app.listen(3001, () => console.log('Escuchando server OK'))