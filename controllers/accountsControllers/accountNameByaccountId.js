const models = require('../../models')
var jwt = require('jsonwebtoken')

const accountNameByAccountId = async (req, res, next) => {
    
    try {
        
        const account = await models.Accounts.findAll({
            where: {
                userId: req.params.userId,
                id:req.params.id
            }
        })
        obj = [...JSON.parse(JSON.stringify(account, null, 4))]
        accountName=obj[0].accountName
        res.status(200).json({
            success:true,
           accountName
        })
    }
    catch (err) {
       
        next(error);
    }
}
module.exports = accountNameByAccountId;