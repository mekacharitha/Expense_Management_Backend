const Joi = require('joi');

const signupDataSchema = Joi.object({

    // username is a string which can have alphabets as well as numbers and is a required field
    userName: Joi.string().alphanum().required() ,
    // username is a string which can have alphabets as well as numbers and is a required field with minimum length of 5
    password: Joi.string().alphanum().required() ,
    
})

module.exports = {
    '/signup': signupDataSchema,    
};