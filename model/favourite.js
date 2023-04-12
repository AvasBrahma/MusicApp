const mongoose=require('mongoose');

const favtSchema=new mongoose.Schema({
     
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    favtSongs: [{
             type: mongoose.Schema.Types.ObjectId,
             ref:'FvtSongs'
 }],
 favtArtist: [{
    type: mongoose.Schema.Types.ObjectId,
    ref:'FvtArtist'
}]

})



const Favourite=mongoose.model('Favourite', favtSchema);
module.exports=Favourite;

