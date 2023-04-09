const express=require('express');
const router=express.Router();
const passport=require('passport');

const userController=require('../controller/users_Controller');


router.get('/profile',passport.checkAuthentication ,userController.profile);

router.post('/create', userController.createUser);


router.get('/sign-in', userController.signIn);

router.post('/create-session', passport.authenticate('local', {

failureRedirect: 'users/sign-in'    
})  , userController.createSession);


module.exports=router; 