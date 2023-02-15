const moment = require('moment')
const express = require('express')
const TodoSchema = require('../../schemas/todoSchema.js')
const { body, response } = require('../../cores/response.js')
const TodoRepository = require('../../repository/todoRepository.js')

const todoPut = express.Router()

todoPut.patch('/:id', async (req, res) => {
    try {
        const { id } = req.params
        req.body.updated_at = moment().format('YYYY-MM-DD HH:mm:ss')
        
        const todoRepo = new TodoRepository
        const todo = await todoRepo.update(id, req.body)
        
        const statusCode = todo ? 200 : 404
        const status = todo ? 'Success' : `Todo with ID ${id} Not Found`
        const message = todo ? 'Success' : 'Not Found'
        const data = todo ? await todoRepo.getByID(id) : {}

        return response(res, statusCode, body(status, message, data))
    } catch(err) {
        return err
    }
})

module.exports = todoPut