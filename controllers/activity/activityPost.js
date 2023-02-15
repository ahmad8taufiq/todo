const express = require('express')
const ActivitySchema = require('../../schemas/activitySchema.js')
const { body, response } = require('../../cores/response.js')
const ActivityRepository = require('../../repository/activityRepository.js')

const activityPost = express.Router()

activityPost.post('/', async (req, res) => {
    try {
        const { error, value } = ActivitySchema.validate(req.body)
        if(error) throw response(res, 400, body('Bad Request', error.message, null))
        
        const activityRepo = new ActivityRepository
        const create = await activityRepo.create(value)
        const activity = await activityRepo.getByID(create.id)
        return response(res, 201, body('Success', 'Success', activity))
    } catch(err) {
        return err
    }
})

module.exports = activityPost