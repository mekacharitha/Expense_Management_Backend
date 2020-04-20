const models = require('../../models')
var jwt = require('jsonwebtoken')

const getAccountBalanceByAccountName = async (req, res, next) => {
    try {
        // const token = req.headers['access-token']
        // const payload = jwt.decode(token)

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
        // res.status(400).json({
        //     success: false,
        //     error
        // })
        next(error);
    }
}
module.exports =  getAccountBalanceByAccountName;