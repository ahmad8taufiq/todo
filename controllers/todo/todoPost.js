const express = require('express')
const TodoSchema = require('../../schemas/todoSchema.js')
const { body, response } = require('../../cores/response.js')
const TodoRepository = require('../../repository/todoRepository.js')

const todoPost = express.Router()

todoPost.post('/', async (req, res) => {
    try {
        const { error, value } = TodoSchema.validate(req.body)
        if(error) throw response(res, 400, body('Bad Request', error.message, null))

        const todoRepo = new TodoRepository
        const create = await todoRepo.create(value)
        const todo = await todoRepo.getByID(create.id)
        return response(res, 201, body('Success', 'Success', todo))
    } catch(err) {
        return err
    }
})

module.exports = todoPost