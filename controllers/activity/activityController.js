const express = require('express')
const activityPost = require('./activityPost.js')
const activityGet = require('./activityGet.js')
const activityGetByID = require('./activityGetByID.js')
const activityPut = require('./activityPut.js')
const activityDelete = require('./activityDelete.js')

const activityController = express.Router()
activityController.use('/activity-groups', activityPost)
activityController.use('/activity-groups', activityGet)
activityController.use('/activity-groups', activityGetByID)
activityController.use('/activity-groups', activityPut)
activityController.use('/activity-groups', activityDelete)

module.exports = activityController