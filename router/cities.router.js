import express from 'express';
import citiesController from '../controllers/cities.controllers.js';
// import { logPostCity }from '../middlewares/example.js';
import { isAdmin } from '../middlewares/isAdmin.middleware.js';

const router = express.Router();

const {getCities, createCities, getCityById,  updateCity, deleteCity} = citiesController;

router.get('/',getCities);

router.get('/:id', getCityById)

router.post('/',createCities);

router.put('/:id', updateCity)

router.delete('/:id',isAdmin ,deleteCity)

 //para todos los tipos de peticiones
// router.get(); solo responde a peticiones get 

export default router;