const models = require('../../models')

/** @description Gets transaction based on id.
 * @param {object} req - Request object with transaction id.
 * @param {object} res - Reponse object with a boolean variable success and transaction if success is true.
 * @param {function next(error) {   
}} next - calls the error handling middleware.
*/

async function transactionById(req, res, next) {
    try {
        const transaction = await models.Transactions.findOne({
            where: {
                id: req.params.id
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

module.exports = transactionById;