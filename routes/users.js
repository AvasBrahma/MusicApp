const express=require('express');
const router=express.Router();

const userController=require('../controller/users_Controller');


router.get('/profile',userController.profile);


module.exports=router; 