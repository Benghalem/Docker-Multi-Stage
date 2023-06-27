const express = require('express');

// creat mongos db
const mongoose = require('mongoose');
// creat redis connect
const redis = require('redis');
// init app
const PORT = process.env.PORT || 4000;
const app = express();

//conect to redix
const RIDES_PORT = '6380';
const REDIS_HOST = 'redis'
const redisClient = redis.createClient({
        url: 'redis://${REDIS_HOST}:${REDIS_PORT}'
});
redisClient.on('error', err => console.log('Redis Client Error', err));
redisClient.on('Connect', () => console.log('Redis Client is connect'));
redisClient.connect();

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


app.get('/', (req, res) =>{
        redisClient.set ('prodect', 'prodects...');
        res.send ('<h1> Hello Project 1 </h1>')});

app.get('/data', async(req, res) =>{
        const prodect = await redisClient.get('prodect')
        res.send ('<h1> Hello Project 1 </h1> <h2>${prodect}</h2>')});



app.listen (PORT, ()=> console.log('App is up running on port: ${PORT}') );
