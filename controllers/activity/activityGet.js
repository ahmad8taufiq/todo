const express = require('express')
const { body, response } = require('../../cores/response.js')
const ActivityRepository = require('../../repository/activityRepository.js')

const activityGet = express.Router()

activityGet.get('/', async (req, res) => {
    const activityRepo = new ActivityRepository
    const activity = await activityRepo.getAll() 
    
    return response(res, 200, body('Success', 'Success', activity))
})

module.exports = activityGet