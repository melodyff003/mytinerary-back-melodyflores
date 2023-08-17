import express from 'express';
import userRouter from './user.router.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello World')
});   //ejemplo

router.use('/users', userRouter);

export default router;