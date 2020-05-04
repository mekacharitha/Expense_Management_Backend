const models = require('../../models');
const logger=require('../../log');

/**
 * @callback requestCallback
 * @param {object} errorObject
 */
/** @description Signups a new user with username and password.
 * @param {object} req - Request object containing username and password.
 * @param {object} res - Reponse object with a boolean variable success and user if success or error message if there is an error.
 ** @param {requestCallback} next - The callback that calls the error handling middleware.
 * @returns {Promise} 
*/

const signUp = async (req, res, next) => {

    try {
        logger.info(req.url);
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
            logger.info("signup.successful")
        }
        else {
            res.status(400).json({
                success: false,
                message: "username already exists"
            }

            );
            logger.warn("signup.request.failed.as.user.already.exist")
        }
    }
    catch (error) {
        logger.error(req.url);
        logger.error(err.name);
        next(error);
    }
}

module.exports = signUp;
