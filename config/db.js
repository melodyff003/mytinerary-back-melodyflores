//crear conexión con nuestra base de datos
import mongoose from 'mongoose';

mongoose.connect(process.env.MONGO) //devuelve una promesa
//tengo q manejarlo de forma asíncrona 
    .then(() => console.log('Database connected successfully!'))
    .catch(err => console.log(err))