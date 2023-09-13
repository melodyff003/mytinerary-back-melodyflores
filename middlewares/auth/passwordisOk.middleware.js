import bcryptjs from 'bcryptjs';

export const passwordIsOk = (req, res, next) => {
    const db_password = req.user.password;
    const form_password = req.body.password;

    if(bcryptjs.compareSync(form_password, db_password)){
        return next()
    }
    return res.status(400).json({
        success: false,
        message: 'Wrong credentials.'
    })
}