const body = (status, message, data) => {
    return {
        status,
        message,
        data
    }
}
const response = (res, status, body) => {
    return res.status(status).json({
        status: body.status,
        message: body.message,
        data: body.data
    })
}

module.exports = { body, response }