const models = require('../../models');
const jwt = require('jsonwebtoken');

const addAccount = async (req, res, next) => {
    try {
        const token = req.headers['access-token']
        const payload = jwt.decode(token)
        const user = await models.Users.findOne({
            where: {
                userName: payload.userName
            }
        })
        const accountDetails = { 
            ...req.body, 
            userId: user.id
        }
        const account = await models.Accounts.create(accountDetails)
        res.status(200).json({
            success:true,
            account
        })
    }
    catch (error) {
        res.status(400).json({
            status: false,
            error
        })
    }
}
module.exports = addAccount;