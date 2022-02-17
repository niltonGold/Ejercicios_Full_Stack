import express from 'express';

const router = express.Router();

const getMayor = (req,res) => {
    res.send(`Devuelvo el alcalde de la ciudad ${req.cityName}`);
}

router.route('/')
      .get(getMayor);

export default router;