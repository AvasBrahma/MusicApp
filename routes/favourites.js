const express=require('express');
const router=express.Router();


const fvtArtistController=require('../controller/fvtArtist_controller');

router.post('/add', fvtArtistController.toggleFvtBtn);
 
module.exports=router;