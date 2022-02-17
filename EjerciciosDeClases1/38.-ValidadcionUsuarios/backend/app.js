
import express from 'express';
import usersRouter from './src/users/users.router.js'

const app = express();

app.use(express.json());

app.use('/auth', usersRouter)

app.listen(3003, () => console.log('Escuchando desde el puerto 3003'));