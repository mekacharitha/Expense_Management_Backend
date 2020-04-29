const models = require('../../models')
var jwt = require('jsonwebtoken')

const getAccountBalanceByAccountName = async (req, res, next) => {
    try {
       
        const accountsData = await models.Accounts.findAll({
            where: {
                accountName: req.params.accountName,
                userId:req.params.userId
            }
        })

        obj = [...JSON.parse(JSON.stringify(accountsData, null, 4))]
        balance=obj[0].accountBalance
        
        res.status(200).json({
           success:true,
            balance
        })     
    }
    catch (error) {
       
        next(error);
    }
}
module.exports =  getAccountBalanceByAccountName;