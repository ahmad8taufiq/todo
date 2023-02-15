const Joi = require('joi')

const ActivitySchema = Joi.object({
    title: Joi.string().required(),
    email: Joi.string().email().optional(),
})

module.exports = ActivitySchema