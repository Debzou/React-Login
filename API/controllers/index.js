const redis = require("redis");
const client = redis.createClient();

// Go to Home
function goToHome(req, res) {
    res.render('index', {session : req.session});
}

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

// Log In
function goToLogIn(req, res) {
    // If the person is already logged in we redirect him to the home page
    if (typeof req.session.username !== 'undefined') {
        res.redirect('/home');
        // Else he can log in
    } else {
        res.render('login', {session : req.session});
    }


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

// export

module.exports.goToHome = goToHome;
module.exports.goToSignUp = goToSignUp;
module.exports.signUpPerson = signUpPerson;
module.exports.goToLogIn = goToLogIn;
module.exports.logInPerson = logInPerson;
module.exports.logOut = logOut;

