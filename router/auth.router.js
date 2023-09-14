import express from 'express';
import authController from '../controllers/auth.controller.js';
import { accountExistsSignUp } from '../middlewares/auth/accountExistsSignUp.js';
import { accountExistsSignIn } from '../middlewares/auth/accountExistsSignIn.middleware.js';
import { accountHasBeenVerified } from '../middlewares/auth/accountHasBeenVerified.middleware.js';
import { passwordIsOk } from '../middlewares/auth/passwordisOk.middleware.js';
import passport from '../middlewares/passport.js';

const { signup, signin, signout, token, googleSignIn } = authController;

const router = express.Router();

// falta validator(validSignup)
router.post('/signup', accountExistsSignUp, signup)

router.post('/signin', 
    accountExistsSignIn,
    //validator(validSignin)
    accountHasBeenVerified,
    passwordIsOk,
    signin) 

router.post('/google', googleSignIn )

router.post('/signout', passport.authenticate('jwt', {session: false}),signout)

router.post('/token', passport.authenticate('jwt', {session: false}),token)

export default router;