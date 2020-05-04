const models = require('../../models');
const jwt = require('jsonwebtoken');
const logger = require('../../log');

/**
 * @callback requestCallback
 * @param {object} errorObject
 */
/** @description Logins a user if username and password are authenticated.
 * @param {object} req - Request object containing username and password.
 * @param {object} res - Reponse object with a boolean variable success and user , token if success or error message if there is an error.
 * @param {requestCallback} next - The callback that calls the error handling middleware.
 * @returns {Promise}
 */

const login = async (req, res, next) => {

    try {
        logger.info(req.url);
        const user = await models.Users.findOne({
            where: {
                userName: req.body.userName,
            }
        })
        if (!user) {
            logger.error(req.url)
            logger.error("signin.request.failed.as.username.incorrect")
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
                logger.info("signin.request.successful")
            } else {
                res.status(401).send({
                    success: false,
                    message: 'Authentication failed.'
                });
                logger.error(req.url)
                logger.error("signin.request.failed.as.username.or.password.incorrect")
            }
        })
    }
    catch (error) {
        logger.error(req.url)
        logger.error(error.name)
        next(error);
    }
}

module.exports = login;

