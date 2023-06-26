const express = require('express');

// creat mongos db
const mongoose = require('mongoose');
// init app
const PORT = process.env.PORT || 4000;
const app = express();

// conect mongoose db 172.20.0.2
const DB_USER = 'root';
const DB_PASSWORD = 'example';
const DB_PORT = '27017';
const DB_HOST = 'mongo';
const URL= 'mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}';
mongoose
        .connect(URL)
        .than(() => console.log('conect to db'))
        .catch((err) => console.log('fialde to connerct db:', err));

app.get('/', (req, res) => res.send ('<h1> Hello Project 1 </h1>'));
app.listen (PORT, ()=> console.log('App is up running on port: ${PORT}') );
