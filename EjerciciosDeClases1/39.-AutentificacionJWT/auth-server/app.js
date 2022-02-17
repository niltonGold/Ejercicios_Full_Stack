import express from 'express';
import authRouter from  './src/auth/auth.router.js';


const app = express();

app.use(express.json());


// este router tiene los endpoints publicos de auth
app.use('/auth', authRouter);


app.listen(3000, () => console.log('Servidor Auth levantado'));