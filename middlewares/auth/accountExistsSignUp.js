import User from "../../models/User.js";

export const accountExistsSignUp = async(req, res, next) => {
    const user = await User.findOne({ email: req.body.email });

    if(user) {
        return res.status(400).json({
            success: false,
            message: 'User already exists.'
        })
    }
    return next()
}