const mongoose=require('mongoose');

const fvtArtistSchema=new mongoose.Schema({

    artistname:{
        type: String,
        required: true 
    },
    image:{
        type:String,
        required: true
    }
},{
    timestamps:true
});

const FvtArtist=mongoose.model('FvtArtist', fvtArtistSchema);
module.exports=FvtArtist;

