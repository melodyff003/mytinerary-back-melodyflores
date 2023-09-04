import express from 'express';
import userRouter from './user.router.js';
import citiesRouter from './cities.router.js'
import itinerariesRouter from './itinerariesrRouter.js'

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello World')
});   //ejemplo

router.use('/users', userRouter);
router.use('/cities', citiesRouter);
router.use('/itineraries', itinerariesRouter); //para probar en postman

export default router;

