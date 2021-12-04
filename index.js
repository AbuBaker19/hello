const express = require('express');
const bodyparser = require('body-parser');
const mongoose = require("mongoose");
const abc = require('./userRouts');
const env = require('dotenv')
const app = express();
app.use(express.json());

env.config()



mongoose.connect("mongodb://localhost/testing", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(console.log("Connected to MongoDB"))
    .catch((err) => console.log("Error While Connectiong to MongoDB ", err));


app.use('/api', abc);


app.listen(process.env.PORT || 4000, () => {
    console.log('your server is running at poart 4000');
})