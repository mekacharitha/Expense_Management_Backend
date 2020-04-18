const Joi = require('joi');

const addTransactionValidation = async (req, res, next) => {

    try {
        const addTransactionDataSchema = Joi.object({
            type: Joi.any().valid(['income', 'expense']).required(),
            description: Joi.any(),
            amount: Joi.number().min(0).positive(),
            accountName: Joi.string().alphanum().required(),
            date: Joi.date(),
            userId: Joi.number().min(1),
        })

        const value = await addTransactionDataSchema.validate({
            type: req.body.type,
            description: req.body.description,
            amount: req.body.amount,
            accountName: req.body.accountName,
            date: req.body.date,
            userId: req.body.userId
        });
        next();

    }
    catch (error) {
        res.status(400).json({
            success: false,
            message: "Invalid transaction data",
            error
        })
    }
}

module.exports = addTransactionValidation;
