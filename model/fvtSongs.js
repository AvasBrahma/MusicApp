const mongoose=require('mongoose');

const fvtSongSchema=new mongoose.Schema({

    songname:{
        type: String,
        required: true
    },
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

const FvtSongs=mongoose.model('FvtSongs', fvtSongSchema);
module.exports=FvtSongs;

