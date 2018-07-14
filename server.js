const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const dbConfig = require('./config/db');

mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.db).then(
    () => { console.log('Connected to MongoDB.'); },
    err => { console.error(err); }
);

const app = express();
app.use(bodyParser.json());
app.use(cors());
const port = process.env.PORT || 4000;

const server = app.listen(() => {
    console.log(`Server started on port ${port}.`);
});
