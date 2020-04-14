const express = require('express');
const router = express.Router(); 

const signup = require('../controllers/loginControllers/signup');
const signin = require('../controllers/loginControllers/signin');

const addAccount = require('../controllers/accountsControllers/addAccount');
const accountsByUserId = require('../controllers/accountsControllers/accountsByUserId');
const accountBalanceByAccountName = require('../controllers/accountsControllers/accountBalanceByAccountName');
const accountNameByAccountId = require('../controllers/accountsControllers/accountNameByaccountId')

const addTransaction = require('../controllers/transactionControllers/addTransaction')
const editTransaction = require('../controllers/transactionControllers/editTransaction')
const deleteTransaction = require('../controllers/transactionControllers/deleteTransaction');
const transactionByAccountName = require('../controllers/transactionControllers/transactionByAccountName');
const transactionByTransactionId = require('../controllers/transactionControllers/transactionByTransactionId')

router.post('/signup', signup);
router.post('/signin' , signin);

router.post('/addAccount' , addAccount);
router.get('/accountsByUserId' , accountsByUserId);
router.get('/accountBalanceByAccountName/:accountName' , accountBalanceByAccountName);
router.get('/accountNameByAccountId' , accountNameByAccountId)

router.post('/addTransaction' , addTransaction);
router.put('/editTransaction' , editTransaction);
router.delete('/deleteTransaction' , deleteTransaction);
router.get('/transactionByName' , transactionByAccountName);
router.get('/transactionById' , transactionByTransactionId);


module.exports = router;