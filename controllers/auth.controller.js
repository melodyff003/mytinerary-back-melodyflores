import bcryptjs from 'bcryptjs';
import crypto from 'crypto';
import User from '../models/User.js';

const controller = {
    signup: async (req, res, next) => {
        try{
            req.body.verified_code = crypto.randomBytes(10).toString('hex')
            req.body.password = bcryptjs.hashSync(req.body.password, 10);

            const user = await User.create(req.body)

            return res.status(201).json({
                success: true,
                message: 'User registered.',
                response: {
                    user,
                    //token
                }
            })

        }catch(error){
            res.status(500).json({
                success: false,
                message: 'Error while creating user.'
            })
        }

        
    },
    signin: async (req, res, next) => {
        try{
            let user = await User.findOneAndUpdate(
                {email: req.user.email},
                {online: true},
                {new: true}
            )

            user.password = null; 
            
            return res.status(200).json({
                success: true,
                message: 'User logged in!',
                response: user
            })

            return

        }catch(error){
            res.status(500).json({
                success: false,
                message: 'Error while signing in.'
            })
        }
    }

} 

export default controller;