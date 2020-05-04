const models = require('../../models')
const logger=require('../../log');

/**
 * @callback requestCallback
 * @param {object} errorObject
 */
/** @description Edits a transaction.
 * @param {object} req - Request object with transactionId and userId.
 * @param {object} res - Reponse object with a boolean variable success.
 * @param {requestCallback} next - The callback that calls the error handling middleware.
 * @returns {Promise} 
*/

async function editTransaction(req, res, next) {
    try {
        logger.info(req.url)
        const account = await models.Accounts.findOne({
            where: {
                userId: req.body.userId,
                accountName: req.body.accountName
            }
        })
        const transaction = await models.Transactions.findOne({
            where: {
                id: req.body.id
            }
        })
        if (transaction.type === "income")
            bal = account.accountBalance - (transaction.amount);
        else
            bal = account.accountBalance + (transaction.amount);
        if (req.body.type === "income") {
            bal = bal +  Number(req.body.amount);
            await account.update({ accountBalance: bal })
        }
        else {
            bal = bal -  Number(req.body.amount);
            await account.update({ accountBalance: bal })
        }
        
        transaction.update({
            type: req.body.type,
            description: req.body.description,
            amount: req.body.amount,
            date: req.body.date,
            accountId: account.id
        })
        res.status(200).json({
            success:true,
            transaction
        })
        logger.info("addTransaction.successful")
    }
    catch (err) {
        logger.error(req.url)
        logger.error(err.name)
        next(err);
    }
}
module.exports = editTransaction;