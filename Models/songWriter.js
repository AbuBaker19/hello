const mongoose = require('mongoose');

//SongWriter schema
const songWriterSchema = mongoose.Schema({
    FullName:
    {
        type: String,
    },
    Alias:
    {
        type: String
    },
    Email:{
        type : String,
        default : "abc@gmail.com"  
    },
    Location:{
        type : String,
        default : ""  
    },
    WebsiteLink:{
        type : String,
        default : ""  
    },
    spotifySongWriterProfile:{
        type : String,
        default : ""  
    },
    Description:{
        type : String,
        default : ""  
    },
    ResgisteredPro:{
        type : String,
        default : ""  
    },
    ProNumber:{
        type : String,
        default : ""  
    },
    SolanaWalletAddress:{
        type : String,
        default : ""  
    },
    ProfileImage:{
        type : Date(),
        default : ""  
    },
    HiResImage:{
        type : Date(),
        default : ""  
    },
    PublishingStatus:{
        type : String,
        default : ""  
    },
    Publisher:{
        type : String,
        default : ""  
    },
    MangagementStatus:{
        type : String,
        default : ""  
    },
    MangagementContectName:{
        type : String,
        default : ""  
    },
    MangagementContectEmail:{
        type : String,
        default : ""  
    },
    MangagementContectphoneNumber:{
        type : String,
        default : ""  
    },
    VerifiedStatus:{
        type : String,
        default : ""  
    },
    Featured:{
        type : String,
        default : ""  
    },
    DisplayProfile:{
        type : String,
        default : ""  
    }

});
//SongWriter Model
module.exports = mongoose.model('songWriters', songWriterSchema);
