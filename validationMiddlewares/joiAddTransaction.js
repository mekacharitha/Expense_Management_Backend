const Joi = require('joi');
const logger = require('../log');

const addTransactionValidation = async (req, res, next) => {

    try {
        const addTransactionDataSchema = Joi.object({
            type: Joi.any().valid(['income', 'expense']).required(),
            description: Joi.any().required(),
            amount: Joi.number().positive().required(),
            accountName: Joi.string().alphanum().required(),
            date: Joi.date().required(),
            // userId: Joi.number().min(1).required(),
        })

        const value = await addTransactionDataSchema.validate({
            type: req.body.type,
            description: req.body.description,
            amount: req.body.amount,
            accountName: req.body.accountName,
            date: req.body.date,
            // userId: req.body.userId
        });
        next();

    }
    catch (error) {
        logger.error(error.details[0].message)
        res.status(400).json({
            success: false,
            message:  error.details[0].message
        })
    }
}

module.exports = addTransactionValidation;
