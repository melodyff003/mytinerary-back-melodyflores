import { Schema, model, Types } from "mongoose";

const collection = 'users';

const schema = new Schema({
    email: {type: String, required: true},
    name: {type: String, required: true},
    password: {type: String, required: true},
    photo: {type: String},
    google: {type: Boolean, default: false},
    online: {type: Boolean, default: false},
    verified_code: {type: String},
    verified: {type: Boolean, default: true}
}, {
    timestamps: true
});

const User = model(collection, schema);

export default User;