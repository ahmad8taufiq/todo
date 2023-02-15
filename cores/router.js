const api = require('../routes/api.js')

const router = (app) => {
    app.use(api)
}

module.exports = router