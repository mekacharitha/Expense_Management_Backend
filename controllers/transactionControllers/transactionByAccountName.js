const models = require('../../models')
const jwt = require('jsonwebtoken')

async function transactionsByAccountName(req, res, next) {
    try {
        // const token = req.headers['access-token']
        // const payload = jwt.decode(token)
        const account = await models.Accounts.findOne({
            where: {
                userId: req.params.userId,
                accountName:req.params.accountName
            }
        })
        //console.log(account.id);
        const transactions=await models.Transactions.findAll({
            where:{
                accountId:account.id
            }       
        })
        res.status(200).json({
            success:true,
            transactions
        })
    }
    catch (err) {
        res.status(400).json({
            success:false,
            err
        })
    }
}
module.exports = transactionsByAccountName;
