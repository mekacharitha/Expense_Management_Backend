const models = require('../../models')

/** @description Adds transaction with details of the transaction.
 * @param {object} req - Request object with userId.
 * @param {object} res - Reponse object with a boolean variable success and error message if success is false.
 * @param {function next(error) {   
}} next - calls the error handling middleware.  
*/

async function addTransaction(req, res, next) {
    try {
        
        const account = await models.Accounts.findOne({
            where: {
                userId: req.body.userId,
                accountName: req.body.accountName
            }
        })
        if (req.body.type == "income") {
            balance = account.accountBalance + Number(req.body.amount);
            await account.update({ accountBalance: balance })
        }
        else {
            balance = account.accountBalance - Number(req.body.amount);
            await account.update({ accountBalance: balance })
        }
        const transactionObj = {
            type: req.body.type,
            description: req.body.description,
            amount: req.body.amount,
            date: req.body.date,
            userId: req.body.userId,
            accountId: account.id
        }
        const transaction = await models.Transactions.create(transactionObj)
        res.status(201).json({
            success: true,
            transaction
        })
    }
    catch (err) {
        next(err);
    }
}
module.exports = addTransaction;