import express from 'express';
import citiesController from '../controllers/cities.controllers.js';

const router = express.Router();

const {getCities, createCities, getCityById} = citiesController;

router.get('/',getCities);

router.get('/:id', getCityById)

router.post('/',createCities);
 //para todos los tipos de peticiones
// router.get(); solo responde a peticiones get 

export default router;