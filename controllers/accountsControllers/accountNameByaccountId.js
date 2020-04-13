const models = require('../../models')
var jwt = require('jsonwebtoken')

const accountNameByAccountId = async (req, res, next) => {
    
    try {
        const token = req.headers['access-token']
        const payload = jwt.decode(token)
        const account = await models.Accounts.findAll({
            where: {
                userId: payload.userId,
                id:req.body.id
            }
        })
        obj = [...JSON.parse(JSON.stringify(account, null, 4))]
        accountName=obj[0].accountName
        res.status(200).json({
           accountName
        })
    }
    catch (err) {
        next(err)
    }
}
module.exports = accountNameByAccountId;