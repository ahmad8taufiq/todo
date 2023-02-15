const express = require('express')
const activityController = require('../controllers/activity/activityController.js')
const todoController = require('../controllers/todo/todoController.js')

const api = express.Router()

api.use('/', activityController)
api.use('/', todoController)

module.exports = api