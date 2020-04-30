const models = require('../../models');

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
        const transaction = await models.Transactions.findAll({
            where: {
                userId: req.params.userId
            }
        })
        res.status(200).json({
            success:true,
            transaction
        })
    }
    catch (err) {

        next(error);
    }
}


module.exports = transactionByUserId;