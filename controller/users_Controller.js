const User=require('../model/user');


module.exports.profile=function(req, res){
     console.log('Profile Page ........');
     return res.render('profile');
}


// post Data to Database
module.exports.createUser= async function(req, res){

    console.log(req.body);
     if(req.body.password!=req.body.confirmpassword){
         return res.redirect('back');
     }
     console.log(req.body);
     
     let user= await User.findOne({email:req.body.email});
         if(!user){
            console.log("Read to push to DB...................");
                let usercreated= await User.create(req.body)

                 if(!usercreated){
                     console.log('Error in creating user while signing up');
                     return;
                 }
                 console.log("User Updated to DB...............");
                 return res.redirect('/');
         }else{
             console.log("Error in Finding User :User already Present");
             return res.redirect('back');
         }
         
 }

 module.exports.signIn=function(req, res){
    if(req.isAuthenticated()){
        res.redirect('/users/profile');
    }else{
        console.log('Sign In ........');
        return res.render('signIn');
    }
}
    

module.exports.createSession=async function(req, res){

    /*
     //find the user
         let user= await User.findOne({email: req.body.email});
        //handle user found
       if(user){
             //check password
            if(user.password!=req.body.password){
                return res.redirect('back');
            }
             //handle session creation
            res.cookie('user_id', user.id)
            return res.redirect('/');
         
    }else{
             console.log('Error Finding an User.......');
             return res.redirect('back');
     }
            
}
   */

return res.redirect('/');

}
