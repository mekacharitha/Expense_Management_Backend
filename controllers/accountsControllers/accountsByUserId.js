const models = require('../../models')
var jwt = require('jsonwebtoken')

const getAccountsByUserId = async (req, res, next) => {
    try {
        
        const accountsData = await models.Accounts.findAll({
            where: {
                userId: req.params.userId
            }
        })
        res.status(200).json({
            success:true,
            accountsData
        })
    }
    catch (error) {
        next(error);
    }
}
module.exports = getAccountsByUserId ;