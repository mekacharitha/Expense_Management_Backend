const models = require('../../models')

/**
 * @callback requestCallback
 * @param {object} errorObject
 */
/** @description Deletes a transaction based on the transactionId.
 * @param {object} req - Request object with transactionId.
 * @param {object} res - Reponse object with a boolean variable success.
 * @param {requestCallback} next - The callback that calls the error handling middleware.
 * @returns {Promise}
*/

async function deleteTransaction(req, res, next) {
    try {
        const transaction = await models.Transactions.findOne({
            where: {
                id: req.params.id
            }
        })
        const account = await models.Accounts.findOne({
            where: {
                id:transaction.accountId
            }
        })
        if (transaction.type == "income") {
            bal = account.accountBalance - transaction.amount
            await account.update({ accountBalance: bal })
        }
        else {
            bal = account.accountBalance + transaction.amount
            await account.update({ accountBalance: bal })
        }
        await models.Transactions.destroy({
            where:{
                id:req.params.id
            }
        })
        res.status(200).json({
            success:true,
            transaction
        })
    }
    catch (err) {
        
        next(err);
    }
}
module.exports = deleteTransaction;