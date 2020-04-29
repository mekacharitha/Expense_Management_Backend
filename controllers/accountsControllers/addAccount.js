const models = require('../../models');

/** @description Adds a new account with accountName and startingBalance.
 * @param {object} req - Request object with accountName and startingBalance.
 * @param {object} res - Reponse object with a boolean variable success and account if success or error message if there is an error.
 * @param {function next(error) {   
}} next - calls the error handling middleware.
*/


const addAccount = async (req, res, next) => {
    try {
        
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