import express from 'express';
import usuarioRouter from './src/usuario/usuario.router.js';


const app = express();

app.use(express.json());

app.use('/users', usuarioRouter);

app.listen(3003, () => console.log('Escuchando server ok 3003'));