const models = require('../../models')

/**
 * @callback requestCallback
 * @param {object} errorObject
 */
/** @description Gets accounts balance based on the account name.
 * @param {object} req - Request object with account name and userId.
 * @param {object} res - Reponse object with a boolean variable success and balance if success is true.
 * @param {requestCallback} next - The callback that calls the error handling middleware.
 * @returns {Promise}
*/

const getAccountBalanceByAccountName = async (req, res, next) => {
    try {
       
        const accountsData = await models.Accounts.findAll({
            where: {
                accountName: req.params.accountName,
                userId:req.params.userId
            }
        })

        obj = [...JSON.parse(JSON.stringify(accountsData, null, 4))]
        balance=obj[0].accountBalance
        
        res.status(200).json({
           success:true,
            balance
        })     
    }
    catch (error) {
       
        next(error);
    }
}
module.exports =  getAccountBalanceByAccountName;