const Joi = require('joi')

const ActivitySchema = Joi.object({
    title: Joi.string().required().messages({
        'string.empty': 'title cannot be null',
    }),
    email: Joi.string().email().optional(),
})

module.exports = ActivitySchema