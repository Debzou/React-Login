const router = require('express').Router();
const controller = require('../controllers');

// If we have the root route we send the person to /home
router.get('/',(req,res)=>{
    controller.goToHome(req,res);
});

router.get('/home',(req,res)=>{
    controller.goToHome(req,res);
});


// Account

// Sign up page
router.get('/signup',(req,res)=>{
    controller.goToSignUp(req,res);
});

router.post('/signup',(req,res)=>{
    controller.signUpPerson(req,res);
});

// Log in page
router.get('/login',(req,res)=>{
    controller.goToLogIn(req,res);
});

router.post('/login',(req,res)=>{
    controller.logInPerson(req,res);
});

// Log Out
router.get('/logout',(req,res) => {
    controller.logOut(req, res);
});



module.exports=router;