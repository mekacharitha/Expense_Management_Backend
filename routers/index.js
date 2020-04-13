const express = require('express');
const router = express.Router(); 

const signup = require('../controllers/loginControllers/signup');
const signin = require('../controllers/loginControllers/signin');

const addAccount = require('../controllers/accountsControllers/addAccount');
const accountsByUserId = require('../controllers/accountsControllers/accountsByUserId');


router.post('/signup', signup);
router.post('/signin' , signin);

router.post('/addAccount' , addAccount);
router.get('/accountsByUserId' , accountsByUserId);


module.exports = router;