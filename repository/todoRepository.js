const moment = require('moment')
const Todo = require ('../models/todoModel.js')

class TodoRepository {
    async create(data) {
        try {
            return await Todo.create(data)
        } catch(e) {
            return e
        }
    }

    async getAll(activity_group_id) {
        return activity_group_id ? await Todo.findAll({
            where: { activity_group_id },
        }) : await Todo.findAll()
    }

    async getByID(id) {
        return await Todo.findByPk(id)
    }

    async update(id, data) {
        try {
            return await Todo.update(data, {
                where: { id },
            })
        } catch(e) {
            return e
        }
    }

    async delete(id) {
        return await Todo.destroy({
            where: { id }
        })
    }
}

module.exports = TodoRepository