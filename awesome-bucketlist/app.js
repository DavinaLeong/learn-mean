//declaring dependencies
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const config = require('./config/database');
const bucketlist = require('./controllers/bucketlist');

//--- setup db connection ---
mongoose.connect(config.database);

//declaring port
const port = 3000;

//initialize app variable
const app = express();

//--- setup app ---
//middleware for cors;
app.use(cors());

//middleware for bodyparsing using both json and urlencoding
app.use(bodyParser.urlencoded({exnteded: true}));
app.use(bodyParser.json());

/* express.static is a built in middleware function to serve static files.
    We are telling express server public folder is the place to look for the static files
*/
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.send('Invalid page');
});

//routing all http requests to /bucketlist to bucketlist controller
app.use('/bucketlist', bucketlist);

app.listen(port, () => {
    console.log(`Started server at port: ${port}.`);
});