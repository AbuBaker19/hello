const mongoose = require("mongoose");

const dbconnection = (req, res) => {
    try {
        mongoose.connect("mongodb+srv://hello:hellojazz@cluster0.biaoh.mongodb.net/testing?retryWrites=true&w=majority",
            { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('Data Base connection successfull...');
    } catch (error) {
        console.log('Something wrong database connection Failed... ');
    }
}
module.exports = dbconnection;