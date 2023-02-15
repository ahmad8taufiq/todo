const moment = require('moment')
const express = require('express')
const { body, response } = require('../../cores/response.js')
const ActivitySchema = require('../../schemas/activitySchema.js')
const ActivityRepository = require('../../repository/activityRepository.js')

const activityPut = express.Router()

activityPut.patch('/:id', async (req, res) => {
    try {
        const { id } = req.params
        const { error, value } = ActivitySchema.validate(req.body)
        if(error) throw response(res, 400, body('Bad Request', error.message, null))
        
        const now = moment().format('YYYY-MM-DD HH:mm:ss')
        value.updated_at = now
        
        const activityRepo = new ActivityRepository
        const activity = await activityRepo.update(id, value)
        
        const statusCode = activity ? 200 : 404
        const status = activity ? 'Success' : `Activity with ID ${id} Not Found`
        const message = activity ? 'Success' : 'Not Found'
        const data = activity ? await activityRepo.getByID(id) : {}

        return response(res, statusCode, body(status, message, data))
    } catch(err) {
        return err
    }
})

module.exports = activityPut