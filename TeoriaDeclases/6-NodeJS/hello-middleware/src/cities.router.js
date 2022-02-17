import express from 'express';
import mayorRouter from './mayor.router.js';

const router = express.Router();

router.use('/:name/mayor', (req,res,next) => {
    // middleware que añade un atributo a la request
    req.cityName = req.params.name;
    next();
}, mayorRouter);

const getAllCities = (req,res) => {
    res.send('Te devuelvo todas las ciudades');
}

const createCity = (req,res) => {
    res.send('Creada tu ciudad');
}

router.route('/')
    .get(getAllCities)
    .post(createCity)


const getCity = (req, res) => {
    res.send(`Devuelvo la ciudad ${req.params.name}`);
}

const deleteCity = (req,res) => {
    res.send(`Borro la ciudad ${req.params.name}`)
}

const updateCity = (req,res) => {
    res.send(`Actualizo la ciudad ${req.params.name}`)
}

router.route('/:name')
    .get(getCity)
    .delete(deleteCity)
    .patch(updateCity)

export default router;