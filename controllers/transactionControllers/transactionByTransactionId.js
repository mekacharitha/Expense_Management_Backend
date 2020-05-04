const models = require('../../models');
const logger=require('../../log');

/**
 * @callback requestCallback
 * @param {object} errorObject
 */
/** @description Gets transaction based on id.
 * @param {object} req - Request object with transaction id.
 * @param {object} res - Reponse object with a boolean variable success and transaction if success is true.
 * @param {requestCallback} next - The callback that calls the error handling middleware.
 * @returns {Promise}
*/

async function transactionById(req, res, next) {
    try {
        logger.info(req.url)
        const transaction = await models.Transactions.findOne({
            where: {
                id: req.params.id
            }
        })
        res.status(200).json({
            success:true,
            transaction
        })
        logger.info("getTransactionByTransactionId.successful")
    }
    catch (err) {
        logger.error(req.url)
        logger.error(err.name)
        next(err);
    }
}

module.exports = transactionById;