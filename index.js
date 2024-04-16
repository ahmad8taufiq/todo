const express = require('express')
const migrate = require('./cores/migration.js')
const router = require('./cores/router.js')
const middleware = require('./cores/middleware.js')

const app = express()
middleware(express, app)
router(app)

// migrate()

app.listen(process.env.PORT, () => console.log(`app listening on port: http://localhost:${process.env.PORT}`))