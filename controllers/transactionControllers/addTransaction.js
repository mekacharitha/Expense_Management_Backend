const models = require('../../models')
const jwt = require('jsonwebtoken')

async function addTransaction(req, res, next) {
    try {
        const token = req.headers['access-token']
        const payload = jwt.decode(token)
        const account = await models.Accounts.findOne({
            where: {
                userId: payload.userId,
                accountName: req.body.accountName
            }
        })
        if (req.body.type == "income") {
            balance = account.accountBalance + req.body.amount
            await account.update({ accountBalance: balance })
        }
        else {
            balance = account.accountBalance - req.body.amount
            await account.update({ accountBalance: balance})
        }
        const transactionObj = {
            type:req.body.type,
            description : req.body.description,
            amount : req.body.amount,
            date : req.body.date,
            userId: payload.userId, 
            accountId: account.id
        }
        const transaction = await models.Transactions.create(transactionObj)
        res.status(200).json({
            transaction
        })
    }
    catch (err) {
        next(err)
    }
}
module.exports = addTransaction;