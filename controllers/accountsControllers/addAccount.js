const models = require('../../models');
const logger = require('../../log');

/**
 * @callback requestCallback
 * @param {object} errorObject
 */

/** @description Adds a new account with accountName and startingBalance.
 * @param {object} req - Request object with accountName and startingBalance.
 * @param {object} res - Reponse object with a boolean variable success and account if success or error message if there is an error.
 * @param {requestCallback} next - The callback that calls the error handling middleware.
 * @returns {Promise}
*/


const addAccount = async (req, res, next) => {
    try {
        logger.info(req.url);
        const account = await models.Accounts.findOne({
            where: {
                accountName: req.body.accountName,
                userId:req.body.userId

            }
        })

        if (!account) {
            const account = await models.Accounts.create(req.body)
            res.status(201).json({
                success: true,
                account
            })
            logger.info("addAccount.successful")
        }
        else{
            logger.error("addAccount.failed.as.accountName.already.exist")
            res.status(400).json({
                success: false,
                message:"Account name already exists"
            })
        }

    }
    catch (error) {
        logger.error(req.url)
        logger.error(err.name)
        next(error);
    }
}
module.exports = addAccount;