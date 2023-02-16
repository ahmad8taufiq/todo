const express = require('express')
const { body, response } = require('../../cores/response.js')
const ActivityRepository = require('../../repository/activityRepository.js')

const activityGetByID = express.Router()

activityGetByID.get('/:id', async (req, res) => {
    const { id } = req.params
    const activityRepo = new ActivityRepository
    const activity = await activityRepo.getByID(id)
    
    const statusCode = activity ? 200 : 404
    const status = activity ? 'Success' : 'Not Found'
    const message = activity ? 'Success' : `Activity with ID ${id} Not Found`
    const data = activity ? activity : {}
    
    return response(res, statusCode, body(status, message, data))
})

module.exports = activityGetByID