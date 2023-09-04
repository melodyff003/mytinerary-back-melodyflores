import express from 'express';
import itinerariesController from '../controllers/itinerariesControllers.js';

const router = express.Router();

const {addItinerary, getItineraries, createItinerary, getItineraryById,  updateItinerary, deleteItinerary} = itinerariesController;

router.get('/',getItineraries);

router.get('/:id', getItineraryById)

router.post('/',createItinerary);

router.put('/:id', updateItinerary)

router.delete('/:id', deleteItinerary)

router.put('/add/:id', addItinerary)

 //para todos los tipos de peticiones
// router.get(); solo responde a peticiones get 

export default router;