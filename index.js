const express = require('express')
const middleware = require('./cores/middleware.js')
const router = require('./cores/router.js')

const app = express()
middleware(express, app)
router(app)

app.listen(process.env.PORT, () => console.log(`app listening on port: http://localhost:${process.env.PORT}`))