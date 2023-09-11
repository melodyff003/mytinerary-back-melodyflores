import { Schema, model, Types } from "mongoose";

const collections = 'itineraries'

let schema = new Schema({ //propiedades
    activity: {type: String, required: true},
    user_icon: {type: String, required: true},
    user_name: {type: String, required: true},
    price: {type: String, required: true},
    duration: {type: String, required: true},
    hashtags: [{type: String, required: true}]
})

const Itinerary = model(collections, schema)

export default Itinerary;