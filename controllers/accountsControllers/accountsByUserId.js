const models = require('../../models')
var jwt = require('jsonwebtoken')

const getAccountsByUserId = async (req, res, next) => {
    try {
        const token = req.headers['access-token']
        const payload = jwt.decode(token)
        // const user = await models.User.findOne({
        //     where: {
        //         userName: payload.userName
        //     }
        // })
        const accountsData = await models.Accounts.findAll({
            where: {
                userId: payload.userId
            }
        })
        res.status(200).json({
            accountsData
        })
    }
    catch (error) {
        res.status(400).json({
            status: false,
            error
        })
    }
}
module.exports = getAccountsByUserId ;