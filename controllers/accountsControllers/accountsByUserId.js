const models = require('../../models')
const logger=require('../../log');

/**
 * @callback requestCallback
 * @param {object} errorObject
 */
/** @description Gets accounts details based on the userId.
 * @param {object} req - Request object with userId.
 * @param {object} res - Reponse object with a boolean variable success and required accounts if success is true.
 * @param {requestCallback} next - The callback that calls the error handling middleware.
 * @returns {Promise}
*/

const getAccountsByUserId = async (req, res, next) => {
    try {
        logger.info(req.url)
        const accountsData = await models.Accounts.findAll({
            where: {
                userId: req.params.userId
            }
        })
        res.status(200).json({
            success:true,
            accountsData
        })
        logger.info("getAccountsByUserId.successful")
    }
    catch (error) {
        logger.error(req.url)
        logger.error(err.name)
        next(error);
    }
}

module.exports = getAccountsByUserId ;