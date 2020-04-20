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
        // res.status(400).json({
        //     success:false,
        //     err
        // })
        next(error);
    }
}

module.exports = transactionById;