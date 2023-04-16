const FvtArtist=require('../model/fvtArtist');
const User=require('../model/user');

module.exports.toggleFvtBtn= async function(req, res){

    console.log("Inside Favourites Add Functions")

      FvtArtist.create({
        artistname: req.body.artistname,
        user: req.user._id
      }, function(err, fvtartist){
        if(err){
            console.log('error in adding favourites');

        }
        return res.redirect('back');
      })

}