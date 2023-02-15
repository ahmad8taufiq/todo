const moment = require('moment')
const Activity = require ('../models/activityModel.js')

class ActivityRepository {
    async create(data) {
        try {
            return await Activity.create(data)
        } catch(e) {
            return e
        }
    }

    async getAll() {
        return await Activity.findAll()
    }

    async getByID(id) {
        return await Activity.findByPk(id)
    }

    async update(id, data) {
        try {
            return await Activity.update(data, {
                where: { id },
            })
        } catch(e) {
            return e
        }
    }

    async delete(id) {
        return await Activity.destroy({
            where: { id }
        })
    }
}

module.exports = ActivityRepository