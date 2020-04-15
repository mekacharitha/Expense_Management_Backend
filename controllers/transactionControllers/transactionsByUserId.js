const models = require('../../models')

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
        res.status(400).json({
            success:false,
            err
        })
    }
}

module.exports = transactionByUserId;