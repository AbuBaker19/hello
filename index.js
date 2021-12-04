require('dotenv').config();
const express = require('express');
const bodyparser = require('body-parser');
const abc = require('./Routes/userRouts');
const dbconnection = require('./database');
const app = express();
app.use(express.json());

dbconnection()
const port = process.env.PORT;


app.use('/api', abc);



app.listen(port, () => {
    console.log('your server runing at:' +port);
});
