const models = require('../../models')

async function editTransaction(req, res, next) {
    try {
       
        const account = await models.Accounts.findOne({
            where: {
                userId: req.body.userId,
                accountName: req.body.accountName
            }
        })
        const transaction = await models.Transactions.findOne({
            where: {
                id: req.body.id
            }
        })
        if (transaction.type === "income")
            bal = account.accountBalance - (transaction.amount);
        else
            bal = account.accountBalance + (transaction.amount);
        if (req.body.type === "income") {
            bal = bal +  Number(req.body.amount);
            await account.update({ accountBalance: bal })
        }
        else {
            bal = bal -  Number(req.body.amount);
            await account.update({ accountBalance: bal })
        }
        
        transaction.update({
            type: req.body.type,
            description: req.body.description,
            amount: req.body.amount,
            date: req.body.date,
            accountId: account.id
        })
        res.status(200).json({
            success:true,
            transaction
        })
    }
    catch (err) {
        next(err);
    }
}
module.exports = editTransaction;