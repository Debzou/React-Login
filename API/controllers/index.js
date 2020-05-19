

// sign up a new person
function signUpPerson(req, res) {
    const crypto = require('crypto');
    let pass = crypto.createHash('md5').update(req.body.pass).digest("hex");
    const Models = require('../models');
    const newAccount = Models.Account ({
        username: req.body.username,
        password : pass,
        email : req.body.email
    });
    newAccount.save(function(err) {
        if (err) throw err;
        res.end('done');
    });
}

// log in a person
// return JWT
function logInPerson(req, res) {
    const crypto = require('crypto');
    let pass = crypto.createHash('md5').update(req.body.pass).digest("hex");
    const Models = require('../models');
    //Find user's username and password
    Models.Account.find({username : req.body.username.toLowerCase(), password : pass},function(err,result) {
        if (err) throw err;
        if (result.length == 1) {
            //req.session.username = req.body.username;
            res.json(result[0].token);
        } else {
            res.json('error');
        }
    });
}

// Log Out
function logOut(req, res) {
   // delete a token
   // give a new token
}

// Check if username exists
function getUsername(req, res) {
    const Models = require('../models');
    Models.Account.find({username : req.params.username}, function(err, username) {
        if (err) throw err;
        res.json(username);
    });
}

// find email
function getEMail(req, res) {
    const Models = require('../models');
    Models.Account.find({email : req.params.email}, function(err, email) {
        if (err) throw err;
        res.json(email);
    });
}

// export function

module.exports.signUpPerson = signUpPerson;
module.exports.logInPerson = logInPerson;
module.exports.logOut = logOut;
module.exports.getEMail =getEMail;
module.exports.getUsername = getUsername;
