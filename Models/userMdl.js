const mongoose = require('mongoose');

//user schema
const abcSchema = mongoose.Schema({
    username:
    {
        type: String,
        required: true
    },
    email:
    {
        type: String,
        required: true,
        unique: true,

    },
    password:
    {
        type: String,
        required: true
    }
});
//user Model
module.exports = mongoose.model('abc', abcSchema);