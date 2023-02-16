const Joi = require('joi')

const ActivitySchema = Joi.object({
    title: Joi.string().required().messages({
        'any.required': 'title cannot be null'
    }),
    email: Joi.string().email().optional(),
})

module.exports = ActivitySchema