require('dotenv').config()
const { Sequelize } = require('sequelize')

const sequelize = new Sequelize(process.env.MYSQL_DBNAME, process.env.MYSQL_USER, process.env.MYSQL_PASSWORD, {
    host: process.env.MYSQL_HOST,
    dialect: process.env.MYSQL_DRIVER,
    port: parseInt(process.env.MYSQL_PORT),
    logging: false,
});

module.exports = sequelize