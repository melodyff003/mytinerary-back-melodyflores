import express from 'express'

const router = express.Router();

router.get('/', (req, res) => {
    res.json({
      user: 'Melody Flores'
    })
  });

 //para todos los tipos de peticiones
// router.get(); solo responde a peticiones get 

export default router;