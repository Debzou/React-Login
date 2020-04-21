const redis = require("redis");
const client = redis.createClient();



// Signup
function goToSignUp(req, res) {
    // If the person is already logged in we redirect him to the home page
    if (typeof req.session.username !== 'undefined') {
        res.redirect('/home');
        // Else he can sign in
    } else {
        res.render('signup', {session : req.session});
    }
}

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

        //Store user's username into session
        req.session.username = req.body.username;

        res.end('done');
    });
}


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

    req.session.destroy((err) => {
        if(err) {
            return console.log(err);
        }
        res.redirect('/');
    });
}
// Check if username exists
function getUsername(req, res) {
    const Models = require('../models');

    Models.Account.find({username : req.params.username}, function(err, username) {

        if (err) throw err;

        res.json(username);

    });

}

function getEMail(req, res) {
    const Models = require('../models');

    Models.Account.find({email : req.params.email}, function(err, email) {
        if (err) throw err;
        res.json(email);
    });
}
// export

module.exports.goToHome = goToHome;
module.exports.goToSignUp = goToSignUp;
module.exports.signUpPerson = signUpPerson;
module.exports.goToLogIn = goToLogIn;
module.exports.logInPerson = logInPerson;
module.exports.logOut = logOut;
module.exports.getEMail =getEMail;
module.exports.getUsername = getUsername;
