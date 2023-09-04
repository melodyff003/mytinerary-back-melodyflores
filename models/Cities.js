import { Schema, model, Types } from "mongoose";

let collections = 'Cities';

let schema = new Schema({ //propiedades
    city: {type: String,required:true},
    image: {type: String, require:true},
    description: { type: String, require:true},
    province: { type: String, require:true},
    itineraries: [{type: Types.ObjectId, ref: 'itineraries'}]
}, {    
    timestamps: true //fechas
})

const City = model(collections, schema)

export default City;