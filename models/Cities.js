import { Schema, model, types } from "mongoose";

let collections = 'Cities';
let schema = new Schema({ //propiedades
    name: {type: String,required:true},
    province: {type: String, require:true},
    description: { type: String, require:true},
    image: { type: String, require:true},
}, {
    timestamps: true //fechas
})

const City = model(collections, schema)

export default City;