const express = require('express')
const { body, response } = require('../../cores/response.js')
const TodoRepository = require('../../repository/todoRepository.js')

const todoGet = express.Router()

todoGet.get('/', async (req, res) => {
    const { activity_group_id } = req.query

    const todoRepo = new TodoRepository
    const todo = await todoRepo.getAll(activity_group_id)

    return response(res, 200, body('Success', 'Test', todo))
})

module.exports = todoGet