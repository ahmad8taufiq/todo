const express = require('express')
const { body, response } = require('../../cores/response.js')
const TodoRepository = require('../../repository/todoRepository.js')

const todoGetByID = express.Router()

todoGetByID.get('/:id', async (req, res) => {
    const { id } = req.params
    const todoRepo = new TodoRepository
    const todo = await todoRepo.getByID(id)
    
    const statusCode = todo ? 200 : 404
    const status = todo ? 'Success' : 'Not Found'
    const message = todo ? 'Success' : `Todo with ID ${id} Not Found`
    const data = todo ? todo : []
    
    return response(res, statusCode, body(status, message, data))
})

module.exports = todoGetByID