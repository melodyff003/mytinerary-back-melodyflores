import express from 'express';
import userRouter from './user.router.js';
import citiesRouter from './cities.router.js'
import itinerariesRouter from './itinerariesrRouter.js'
import authRouter from './auth.router.js'

const router = express.Router();

router.use('/users', userRouter);
router.use('/cities', citiesRouter);
router.use('/itineraries', itinerariesRouter); //para probar en postman
router.use('/auth', authRouter)

export default router;

