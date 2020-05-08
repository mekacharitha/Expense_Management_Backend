const models = require('../../models');
const logger=require('../../log');
const {decodeToken} = require('../../util/util');

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
        logger.info(req.url);
        const payload = decodeToken(req.headers.token)
        const account = await models.Accounts.findOne({
            where: {
                userId: payload.userId,
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
        logger.info("getTransactionByAccountName.successful")
    }
    catch (err) {
        logger.error(req.url)
        logger.error(err.name)
        next(err);
    }
}
module.exports = transactionsByAccountName;
