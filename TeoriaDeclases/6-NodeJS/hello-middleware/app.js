import express from 'express';
import citiesRouter from './src/cities.router.js';
import countriesRouter from './src/countries.router.js';
import { consoleMiddleware } from './src/console.middleware.js';

const app = express();

app.use(consoleMiddleware);

app.get('/', (req, res) => {
    res.send('Esto es una ruta padre');
});

app.use('/cities', consoleMiddleware, citiesRouter);
app.use('/countries', countriesRouter);


app.listen(3000, () => console.log('Hola soy un server HTTP'))