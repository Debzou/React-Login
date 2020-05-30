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
// socket io
// port 3002
const server = require('http').Server(app).listen(3002);
const io = require('socket.io')(server);


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

// Listen port 3001
// API
app.listen(3001,(err)=>{
    if (err)
        throw err;
    console.log("waiting on localhost:3001 ")
});


// MongoDB
database = 'mongodb://localhost:27017/api';
mongoose.connect(database,{useNewUrlParser: true},(err)=> {
    if (err)
        throw err;
    console.log('Connect to the database');
});

// socket io
io.on('connection', function(socket) {
    // When we want to update threads on the forum page we will have to call this
    socket.on('user-connection',(data)=> {
        console.log(data);
        if (data.sub ==='SubscribeNewThread'){
            socket.join('new-thread');   
        }         
    });
    socket.on('disconnect', function() {
        socket.disconnect();
    });
});


module.exports.io = io;