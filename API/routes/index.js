const router = require('express').Router();
const controller = require('../controllers');


// Sign up page

router.post('/signup',(req,res)=>{
    controller.signUpPerson(req,res);
});

// Log in page


router.post('/login',(req,res)=>{
    controller.logInPerson(req,res);
});

// Log Out
router.get('/logout-server',(req,res) => {
    controller.logOut(req, res);
});

router.get('/isConnected',(req,res) => {
    controller.isConnected(req, res);
});

// Check if username exists
router.get('/api/username/:username',(req,res)=>{
    controller.getUsername(req,res);
});

router.get('/api/email/:email',(req,res)=>{
    controller.getEMail(req,res);
});

router.get('/',(req,res)=>{
    res.end("welcome in API")
});

router.post('/api/message',(req,res)=>{
    controller.postMessage(req,res);
});

router.post('/api/thread',(req,res)=>{
    controller.postThread(req,res);
});


module.exports=router;