const User=require('../model/user');


module.exports.home=async function(req,res){
                 
    if(req.isAuthenticated()){
        return res.render('home');  
    } else{
        return res.redirect('/users/sign-in');
    }
 }