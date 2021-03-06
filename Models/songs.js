const mongoose = require('mongoose');

//Songs schema
const songInfoSchema = mongoose.Schema({
    Title:
    {
        type: String,
    },
    SongWriters:[{
        SongWriters :{ type: mongoose.Schema.Types.ObjectId, ref: 'songWriters'},
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
    SongMP3File:{
        type : String,
        default : ""  
    },
    AuctionStatus:{
        type : String,
        default : ""  
    },
    NFT_Id:{
        type : String,
        default : ""  
    },
    AuctionEnd:{
        type : Date(),
        default : ""  
    },
    AuctionStart:{
        type : Date(),
        default : ""  
    },
    MetaplexAuctionLink:{
        type : String,
        default : ""  
    },
    ReservePrice:{
        type : String,
        default : ""  
    },
    CurrentBid:{
        type : String,
        default : ""  
    },
    WinningBidAmount:{
        type : String,
        default : ""  
    },
    WinningBidderWalletAddress:{
        type : String,
        default : ""  
    },
    WinningBidderEmail:{
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
    NoOfPlays:{
        type : String,
        default : ""  
    },
    NoOfFavourits:{
        type : String,
        default : ""  
    },

});
//Songs Model
module.exports = mongoose.model('songs', songInfoSchema);