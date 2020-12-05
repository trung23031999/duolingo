const Joi = require('joi');

const registerValidation = (data) =>{
    const schema = {
        username : Joi.string().min(6).required(),
        password : Joi.string().min(8).required(),
        name : Joi.string().min(1).required(),
    };
    return Joi.validate(data,schema);
};

const loginValidation = (data) =>{
    const schema = {
        username : Joi.string().min(6).required(),
        password : Joi.string().min(8).required(),
    };
    return Joi.validate(data,schema);
};

module.exports = { loginValidation, registerValidation};