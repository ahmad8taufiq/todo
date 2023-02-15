const express = require('express')
const todoPost = require('./todoPost.js')
const todoGet = require('./todoGet.js')
const todoGetByID = require('./todoGetByID.js')
const todoPut = require('./todoPut.js')
const todoDelete = require('./todoDelete.js')

const todoController = express.Router()
todoController.use('/todo-items', todoPost)
todoController.use('/todo-items', todoGet)
todoController.use('/todo-items', todoGetByID)
todoController.use('/todo-items', todoPut)
todoController.use('/todo-items', todoDelete)

module.exports = todoController