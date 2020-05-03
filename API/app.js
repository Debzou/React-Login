const express = require('express');
const app = express();

const DreamTeamRoutes = require('./routes');

// Parser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded ( {
    extended : true
}));

app.use(bodyParser.json());
app.use(DreamTeamRoutes);

// Listen
app.listen(3001);
console.log("waiting on localhost:3001");

// MongoDB
const mongoose = require('mongoose');
database = 'mongodb://localhost:27017/RateLimitedAPI';
mongoose.connect(database,(err)=> {
    if (err)
        throw err;
    console.log('Connect to the database');
});