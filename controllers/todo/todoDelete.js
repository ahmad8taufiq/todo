const express = require('express')
const { body, response } = require('../../cores/response.js')
const TodoRepository = require('../../repository/todoRepository.js')

const todoDelete = express.Router()

todoDelete.delete('/:id', async (req, res) => {
    const { id } = req.params
    const todoRepo = new TodoRepository
    const todo = await todoRepo.delete(id)

    const statusCode = todo ? 200 : 404
    const status = todo ? 'Success' : `Todo with ID ${id} Not Found`
    const message = todo ? 'Success' : 'Not Found'
    
    return response(res, statusCode, body(status, message, {}))
})

module.exports = todoDelete