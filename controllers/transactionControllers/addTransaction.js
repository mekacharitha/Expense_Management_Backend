const models = require('../../models')
const jwt = require('jsonwebtoken')

async function addTransaction(req, res, next) {
    try {
        // const token = req.headers['access-token']
        // const payload = jwt.decode(token)
        const account = await models.Accounts.findOne({
            where: {
                userId: req.body.userId,
                accountName: req.body.accountName
            }
        })
        if (req.body.type == "income") {
            balance = account.accountBalance + Number(req.body.amount);
            await account.update({ accountBalance: balance })
        }
        else {
            balance = account.accountBalance - Number(req.body.amount);
            await account.update({ accountBalance: balance })
        }
        const transactionObj = {
            type: req.body.type,
            description: req.body.description,
            amount: req.body.amount,
            date: req.body.date,
            userId: req.body.userId,
            accountId: account.id
        }
        const transaction = await models.Transactions.create(transactionObj)
        res.status(200).json({
            success: true,
            transaction
        })
    }
    catch (err) {
        res.status(400).json({
            success: false,
            error
        })
    }
}
module.exports = addTransaction;