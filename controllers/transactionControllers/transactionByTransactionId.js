const models = require('../../models')

async function transactionById(req, res, next) {
    try {
        const transaction = await models.Transactions.findOne({
            where: {
                id: req.body.id
            }
        })
        res.status(200).json({
            transaction
        })
    }
    catch (err) {
        next(err)
    }
}

module.exports = transactionById;