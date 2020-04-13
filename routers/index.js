const express = require('express');
const router = express.Router(); 

const signup = require('../controllers/loginControllers/signup');
const signin = require('../controllers/loginControllers/signin');


router.post('/signup', signup);
router.post('/signin' , signin);


module.exports = router;