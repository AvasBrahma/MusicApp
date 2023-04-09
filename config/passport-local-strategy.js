const passport=require('passport');

const LocalStrategy=require('passport-local').Strategy;
const User=require('../model/user');

//authentication using passport

passport.use(new LocalStrategy({
    usernameField:'email',
    passReqToCallback: true
},
async function(req, email, password, done){

    // Find a User and establish the identity
     let user= await User.findOne({email: email})
        if(!user || user.password!=password){
            
              req.flash('error', 'Invalid Username/Password');
              //console.log('Invalid Username/ Password');
              return done(null, false);
        }

        return done(null, user);

}

));

//Serializing the user to decide which key to be kept in the cookies
passport.serializeUser(function(user, done){
   done(null, user.id);
});

//Deserialising the user from the key in the cookies
passport.deserializeUser(async function(id,done){
         let user=User.findById(id)
         if(user){
            return done(null, user);
         }else{
            console.log('Error in finding user ----> Passport');
            return done(user);
         }}     
);

// check if the user is authenticated

passport.checkAuthentication=function(req, res, next){
         // if the user is signed in then pass on the request to the next function(controller's action)


         if(req.isAuthenticated()){
            return next();

         }
        //if the user is not signed in
        return res.redirect('/users/sign-in');
}

passport.setAuthenticatedUser=function(req, res, next){
     
    if(req.isAuthenticated()){
        //req user contains the current signed in user from the session cookie and we are just
        //sending this to the local for the viewa

        res.locals.user=req.user;


    }
    next();
}



module.exports=passport;