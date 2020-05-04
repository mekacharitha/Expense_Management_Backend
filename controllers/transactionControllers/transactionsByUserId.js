const models = require('../../models');
const logger=require('../../log');

/**
 * @callback requestCallback
 * @param {object} errorObject
 */
/** @description Gets transactions based on the userId.
 * @param {object} req - Request object with userId.
 * @param {object} res - Reponse object with a boolean variable success and transactions if success is true.
* @param {requestCallback} next - The callback that calls the error handling middleware.
 * @returns {Promise}
*/

async function transactionByUserId(req, res, next) {
    try {
        logger.info(req.url);
        const transaction = await models.Transactions.findAll({
            where: {
                userId: req.params.userId
            }
        })
        res.status(200).json({
            success:true,
            transaction
        })
        logger.info("getTransactionsByUserId.successful")
    }
    catch (err) {
        logger.error(req.url)
        logger.error(err.name)
        next(error);
    }
}


module.exports = transactionByUserId;