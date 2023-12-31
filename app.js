import express from 'express';
import morgan from 'morgan';
import cors from 'cors'; //middleware

import indexRouter from './router/index.router.js';

//paquete corse para hacer peticiones desde el front

const app = express(); //para utilizar express
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({extended: false})); //leer la carga util q tiene una solicitud y codificarla para q sea del formato json
app.use(cors());
app.use(morgan('dev')); //para usar un middleware

app.use('/api', indexRouter); //lo uso como middleware

app.listen(port, () => console.log('Server running on port: ' + port)); //puertos disponibles en la pc 

console.log('Hola?');