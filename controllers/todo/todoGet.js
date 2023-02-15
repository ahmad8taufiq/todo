const express = require('express')
const { body, response } = require('../../cores/response.js')
const TodoRepository = require('../../repository/todoRepository.js')

const todoGet = express.Router()

todoGet.get('/', async (req, res) => {
    const todoRepo = new TodoRepository
    const todo = await todoRepo.getAll() 
    
    return response(res, 200, body('Success', 'Success', todo))
})

module.exports = todoGet