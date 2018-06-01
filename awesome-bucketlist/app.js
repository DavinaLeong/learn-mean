//declaring dependencies
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

//initialize app variable
const app = express();

//declaring port
const port = 3000;

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

app.listen(port, () => {
    console.log(`Started server at port: ${port}.`);
});