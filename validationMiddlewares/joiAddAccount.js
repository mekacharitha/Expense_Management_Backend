const Joi = require('joi');
const logger = require('../log');

const addAccountValidation = async (req, res, next) => {

    try {
        const addAccountDataSchema = Joi.object({
            accountName: Joi.string().alphanum().required(),
            accountBalance: Joi.number().min(0).positive(),
            userId:Joi.number().min(1).positive(),
        })

        const value = await addAccountDataSchema.validate({ accountName: req.body.accountName, accountBalance: req.body.accountBalance , userId:req.body.userId});
        next();

    }
    catch (error) {
        logger.error(error.details[0].message);
        res.status(400).json({
            success: false,
            message:  error.details[0].message
        })
    }
}

module.exports = addAccountValidation;
