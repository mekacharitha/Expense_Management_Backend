const models = require('../../models')
const logger=require('../../log');
const {decodeToken} = require('../../util/util');

/**
 * @callback requestCallback
 * @param {object} errorObject
 */
/** @description Gets accounts name based on the accountsId.
 * @param {object} req - Request object with userId nad accountId.
 * @param {object} res - Reponse object with a boolean variable success and required accounts name if success is true.
 * @param {requestCallback} next - The callback that calls the error handling middleware.
 * @returns {Promise}
*/

const accountNameByAccountId = async (req, res, next) => {
    
    try {
        logger.info(req.url);
        const payload = decodeToken(req.headers.token)
        const account = await models.Accounts.findAll({
            where: {
                userId: payload.userId,
                id:req.params.id
            }
        })
        obj = [...JSON.parse(JSON.stringify(account, null, 4))]
        accountName=obj[0].accountName
        res.status(200).json({
            success:true,
            accountName
        })
        logger.info("getAccountNameByUserId.successful")
    }
    catch (err) {
        logger.error(req.url)
        logger.error(err.name)
        next(err);
    }
}
module.exports = accountNameByAccountId;