const models = require('../../models')

/** @description Gets accounts details based on the userId.
 * @param {object} req - Request object with userId.
 * @param {object} res - Reponse object with a boolean variable success and required accounts if success is true.
 * @param {function next(error) {   
}} next - calls the error handling middleware.
* @return {object} accounts  
*/

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