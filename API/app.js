// library
const express = require('express');
const app = express();
const DreamTeamRoutes = require('./routes');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
// redis 
const session = require('express-session');
const redis = require('redis');
const redisStore = require('connect-redis')(session);
const client = redis.createClient();

// Parser 
app.use(bodyParser.urlencoded ( {
    extended : true
}));

// Session
app.use(session({
    secret: 'secret-key',
    store: new redisStore({host: 'localhost', port: 6379, client: client, ttl: 86400}),
    saveUninitialized: false,
    resave: false
}));

app.use(bodyParser.json());
app.use(DreamTeamRoutes);

// Listen port
app.listen(3001,(err)=>{
    if (err)
        throw err;
    console.log("waiting on localhost:3001")
});


// MongoDB
database = 'mongodb://localhost:27017/api';
mongoose.connect(database,{useNewUrlParser: true},(err)=> {
    if (err)
        throw err;
    console.log('Connect to the database');
});


