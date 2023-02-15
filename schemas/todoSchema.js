const Joi = require('joi')

const TodoSchema = Joi.object({
    activity_group_id: Joi.number().required(),
    title: Joi.string().required(),
    priority: Joi.string().required(),
})

module.exports = TodoSchema