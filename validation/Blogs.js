
const Joi = require('joi');

const blogValidation = Joi.object({
    title: Joi.string()
        .min(3)
        .max(40)
        .required(),

    content: Joi.string()
    .required(),
    author : Joi.string()
    .required(),
    image: Joi.string()
    .required()
    
   
})


module.exports = blogValidation