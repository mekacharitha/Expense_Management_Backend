const models = require('../../models');

/** @description Gets transactions based on the accounts name.
 * @param {object} req - Request object with userId and accountName.
 * @param {object} res - Reponse object with a boolean variable success and transactions if success is true.
 * @param {function next(error) {   
}} next - calls the error handling middleware.
* @return {object} transactions. 
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
