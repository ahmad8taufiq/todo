const express = require('express')
const todoPost = require('./todoPost.js')
const todoGet = require('./todoGet.js')
const todoGetByID = require('./todoGetByID.js')
const todoPatch = require('./todoPatch.js')
const todoDelete = require('./todoDelete.js')

const todoController = express.Router()
todoController.use('/todo-items', todoPost)
todoController.use('/todo-items', todoGet)
todoController.use('/todo-items', todoGetByID)
todoController.use('/todo-items', todoPatch)
todoController.use('/todo-items', todoDelete)

module.exports = todoController