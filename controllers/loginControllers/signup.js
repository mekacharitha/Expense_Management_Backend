const models = require('../../models');

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
        // res.status(400).json({
        //     success: false,
        //     message: "could not signup",
        //     error
        // })
        next(error);
    }
}

module.exports = signUp;
