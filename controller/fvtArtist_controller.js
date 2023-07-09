const FvtArtist=require('../model/fvtArtist');
const User=require('../model/user');

module.exports.toggleFvtBtn=async function(req, res){

    console.log("Inside Favourites Add Functions")


      try{

        console.log("requese Body",req.body);

        let fvtArtist=await FvtArtist.create({
          artistname: req.body.artistname,
        });
  
        if(req.xhr){
          return res.status(200).json({
                    data:{
                      fvtArtist:fvtArtist 
                    },
                    message: "Add to Fvt created"
          })
        }
  

      } catch(err){

        return res.redirect('Back');

      }



}