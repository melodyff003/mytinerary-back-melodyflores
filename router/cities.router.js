import express from 'express';
import citiesController from '../controllers/cities.controllers.js';

const router = express.Router();

router.get('/', citiesController.getCities);

router.post('/', citiesController.createCities);
 //para todos los tipos de peticiones
// router.get(); solo responde a peticiones get 

export default router;