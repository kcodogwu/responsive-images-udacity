'use strict';

// load modules
require('dotenv').config();
const express = require('express');
const ejs = require('ejs');

const app = express();

app.set('port', process.env.PORT || 3000);
app.engine('html', ejs.renderFile);
app.set('view engine', 'html');
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.render('index');
});

module.exports = app;