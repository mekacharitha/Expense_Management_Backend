const models = require('../../models')

/** @description Gets accounts name based on the accountsId.
 * @param {object} req - Request object with userId nad accountId.
 * @param {object} res - Reponse object with a boolean variable success and required accounts name if success is true.
 * @param {function next(error) {   
}} next - calls the error handling middleware.
*/

const accountNameByAccountId = async (req, res, next) => {
    
    try {
        
        const account = await models.Accounts.findAll({
            where: {
                userId: req.params.userId,
                id:req.params.id
            }
        })
        obj = [...JSON.parse(JSON.stringify(account, null, 4))]
        accountName=obj[0].accountName
        res.status(200).json({
            success:true,
            accountName
        })
    }
    catch (err) {
       
        next(error);
    }
}
module.exports = accountNameByAccountId;