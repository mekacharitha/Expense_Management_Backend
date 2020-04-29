const models = require('../../models');

/** @description Gets transactions based on the userId.
 * @param {object} req - Request object with userId.
 * @param {object} res - Reponse object with a boolean variable success and transactions if success is true.
 * @param {function next(error) {   
}} next - calls the error handling middleware.
* @return {object} transactions. 
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