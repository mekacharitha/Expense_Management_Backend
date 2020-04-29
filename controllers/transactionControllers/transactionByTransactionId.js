const models = require('../../models')

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