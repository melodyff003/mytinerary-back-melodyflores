export const isAdmin = (req, res, next) => {
    const role = 'mel'

    if(role == 'admin'){
        return next()
    }
    
    return res.status(401).json({
        success: false,
        message: 'User not authorized '
    })
}