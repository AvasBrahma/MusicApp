const User=require('../model/user');


module.exports.home=async function(req,res){
    if(req.cookies.user_id){
           let user= await User.findById(req.cookies.user_id);
                if(user){
                        return res.render('home', {
                         user: user
                        })
                }
    }else{
        res.redirect('/users/sign-in');
    }
   
}
 