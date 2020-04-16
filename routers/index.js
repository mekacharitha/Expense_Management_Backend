const express = require('express');
const router = express.Router(); 

const signup = require('../controllers/loginControllers/signup');
const signin = require('../controllers/loginControllers/signin');
const signupValidation = require('../validationMiddlewares/joiSignup');

const addAccount = require('../controllers/accountsControllers/addAccount');
const accountsByUserId = require('../controllers/accountsControllers/accountsByUserId');
const accountBalanceByAccountName = require('../controllers/accountsControllers/accountBalanceByAccountName');
const accountNameByAccountId = require('../controllers/accountsControllers/accountNameByaccountId');
const addAccountValidation = require('../validationMiddlewares/joiAddAccount')

const addTransaction = require('../controllers/transactionControllers/addTransaction')
const editTransaction = require('../controllers/transactionControllers/editTransaction')
const deleteTransaction = require('../controllers/transactionControllers/deleteTransaction');
const transactionByAccountName = require('../controllers/transactionControllers/transactionByAccountName');
const transactionById = require('../controllers/transactionControllers/transactionByTransactionId')
const transactionByUserId = require('../controllers/transactionControllers/transactionsByUserId');
const addTransactionValidation = require('../validationMiddlewares/joiAddTransaction');


router.post('/signup', signupValidation, signup);
router.post('/signin' , signin);

router.post('/addAccount' , addAccountValidation, addAccount);
router.get('/accountsByUserId/:userId' , accountsByUserId);
router.get('/accountBalanceByAccountName/:accountName/:userId' , accountBalanceByAccountName);
router.get('/accountNameByAccountId/:userId/:id' , accountNameByAccountId)

router.post('/addTransaction' ,addTransactionValidation , addTransaction);
router.put('/editTransaction' ,addTransactionValidation, editTransaction);
router.delete('/deleteTransaction/:id' , deleteTransaction);
router.get('/transactionByName/:accountName/:userId' , transactionByAccountName);
router.get('/transactionById/:id' , transactionById);
router.get('/transactions/:userId' , transactionByUserId);


module.exports = router;