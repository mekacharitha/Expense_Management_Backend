const models = require('../../models');
const jwt = require('jsonwebtoken');

/** @description Logins a user if username and password are authenticated.
 * @param {object} req - Request object containing username and password.
 * @param {object} res - Reponse object with a boolean variable success and user , token if success or error message if there is an error.
 * @param {function next(error) {   
 }} next - calls the error handling middleware.
 */

const login = async (req, res, next) => {

    try {
        const user = await models.Users.findOne({
            where: {
                userName: req.body.userName,
            }
        })
        if (!user) {
            return res.status(401).json({
                success: false,
                message: 'Authentication failed.',
            });
        }

        user.comparePassword(req.body.password, (err, isMatch) => {
            if (isMatch && !err) {
                var token = jwt.sign({ userName: req.body.userName, userId: user.id }, 'nodeauthsecret');
                res.status(200).json({
                    success: true,
                    token: token,
                    user: user
                });
            } else {
                res.status(401).send({
                    success: false,
                    message: 'Authentication failed.'
                });
            }
        })
    }
    catch (error) {
        next(error);
    }
}

module.exports = login;

