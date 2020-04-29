const models = require('../../models');

/** @description Signups a new user with username and password.
 * @param {object} req - Request object containing username and password.
 * @param {object} res - Reponse object with a boolean variable success and user if success or error message if there is an error.
 * @param {function next(error) {   
}} next - calls the error handling middleware. 
*/

const signUp = async (req, res, next) => {

    try {

        const user = await models.Users.findOne({
            where: {
                userName: req.body.userName
            }
        })
        if (!user) {

            const user = await models.Users.create(req.body)
            res.status(201).json({
                success: true,
                user
            })

        }
        else {
            res.status(400).json({
                success: false,
                message: "username already exists"
            }

            );
        }
    }
    catch (error) {
        next(error);
    }
}

module.exports = signUp;
