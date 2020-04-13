const models = require('../../models');

const signUp = async (req, res, next) => {
    try {
        const user = await models.Users.create(req.body)
        res.status(201).json({
            success: true,
            user
        })
        // res.status(200).send(
        //     user
        // );
    }
    catch (error) {
        res.status(400).json({
            success: false,
            message: "could not signup",
            error
        })
    }
}

module.exports = signUp;
