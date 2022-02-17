import express from 'express';

const router = express.Router();

const getCountries = (req,res) => {
    res.send('Obteniendo todos los paises');
}
router.route('/')
      .get(getCountries)

export default router;