const cors = require('cors')
const compression = require('compression')

const middleware = (express, app) => {
    app.use(cors())
    app.use(compression())
    app.use(express.json())
    app.use(express.urlencoded({ extended: true }))
}

module.exports = middleware