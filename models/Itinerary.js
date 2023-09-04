import { Schema, model, Types } from "mongoose";

const collections = 'itineraries'

let schema = new Schema({ //propiedades
    user_icon: {type: String, required: true},
    user_name: {type: String, required: true},
    price: {type: Number, required: true},
    duration: {type: Number, required: true},
    hashtags: [{type: String, required: true}]
})

const Itinerary = model(collections, schema)

export default Itinerary;