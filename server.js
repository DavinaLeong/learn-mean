'use strict';
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const index = require('./routes/index');
const tasks = require('./routes/tasks');

const port = 3000;
const app = express();

//#region view engine
app.set('views', path.join(__dirname, 'client'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
//#endregion

//#region set static folder
app.use(express.static(path.join(__dirname, 'client')));
//#endregion

//#region bodyparser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', index);
app.use('/api', tasks);

app.listen(port, () => console.log(`Server started on port ${port}.`));
//#endregion