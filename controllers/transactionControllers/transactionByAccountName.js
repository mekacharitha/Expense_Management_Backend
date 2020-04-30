const models = require('../../models');

/**
 * @callback requestCallback
 * @param {object} errorObject
 */
/** @description Gets transactions based on the accounts name.
 * @param {object} req - Request object with userId and accountName.
 * @param {object} res - Reponse object with a boolean variable success and transactions if success is true.
* @param {requestCallback} next - The callback that calls the error handling middleware.
 * @returns {Promise}
*/

async function transactionsByAccountName(req, res, next) {
    try {
        
        const account = await models.Accounts.findOne({
            where: {
                userId: req.params.userId,
                accountName:req.params.accountName
            }
        })
        const transactions=await models.Transactions.findAll({
            where:{
                accountId:account.id
            }       
        })
        res.status(200).json({
            success:true,
            transactions
        })
    }
    catch (err) {
        next(error);
    }
}
module.exports = transactionsByAccountName;
