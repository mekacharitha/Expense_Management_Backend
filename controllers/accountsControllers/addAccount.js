const models = require('../../models');

const addAccount = async (req, res, next) => {
    try {
        // const token = req.headers['access-token']
        // const payload = jwt.decode(token)
        // const user = await models.Users.findOne({
        //     where: {
        //         userName: payload.userName
        //     }
        // })
        // const accountDetails = { 
        //     ...req.body, 
        //     userId: user.id
        // }
        const account = await models.Accounts.findOne({
            where: {
                accountName: req.body.accountName
            }
        })
        if (!account) {
            const account = await models.Accounts.create(req.body)
            res.status(201).json({
                success: true,
                account
            })
        }
        else{
            res.status(400).json({
                success: false,
                message:"Account name already exists"
            })
        }

    }
    catch (error) {
        next(error);
    }
}
module.exports = addAccount;