// library
const express = require('express');
const app = express();
const DreamTeamRoutes = require('./routes');
const bodyParser = require('body-parser');

// Parser 
app.use(bodyParser.urlencoded ( {
    extended : true
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
const mongoose = require('mongoose');
database = 'mongodb://localhost:27017/api';
mongoose.connect(database,{useNewUrlParser: true},(err)=> {
    if (err)
        throw err;
    console.log('Connect to the database');
});