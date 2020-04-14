const models = require('../../models')
const jwt = require('jsonwebtoken')

async function transactionsByAccountName(req, res, next) {
    try {
        const token = req.headers['access-token']
        const payload = jwt.decode(token)
        const account = await models.Accounts.findOne({
            where: {
                userId: payload.userId,
                accountName:req.body.accountName
            }
        })
        //console.log(account.id);
        const transactions=await models.Transactions.findAll({
            where:{
                accountId:account.id
            }       
        })
        res.status(200).json({
            transactions
        })
    }
    catch (err) {
        next(err)
    }
}
module.exports = transactionsByAccountName;
