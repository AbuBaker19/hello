const mongoose = require('mongoose');

//Songs schema
const songInfoSchema = mongoose.Schema({
    Title:
    {
        type: String,
    },
    SongWriters:[{
        SongWriters :{ type: mongoose.Schema.Types.ObjectId, ref: ''},
        SongSplits : {type: String, default:"50 %"} 
    }],
    Genre:
    {
        type: String
    },
    Tempo:{
        type : String,
        default : ""  
    },
    Key:{
        type : String,
        default : ""  
    },
    Songstate:{
        type : String,
        default : ""  
    },
    
    SongPitchDescription:{
        type : String,
        default : ""  
    },
    SongLyricsFile:{
        type : String,
        default : ""  
    },
    Song:{
        type : String,
        default : ""  
    },

});
//Songs Model
module.exports = mongoose.model('songs', songInfoSchema);