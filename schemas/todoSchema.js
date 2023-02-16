const Joi = require('joi')

const TodoSchema = Joi.object({
    activity_group_id: Joi.number().required().messages({
        'any.required': 'activity_group_id cannot be null'
    }),
    title: Joi.string().required().messages({
        'any.required': 'title cannot be null'
    }),
    priority: Joi.string().optional(),
})

module.exports = TodoSchema