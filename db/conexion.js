const Sequelize = require('sequelize');
require('dotenv').config()

const sequelize = new Sequelize('api_jwt', null, null, {
  dialect: 'mssql',
  server: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialectOptions: {
    authentication: {
      type: 'default',
      options: {
        encrypt: false,
        userName: process.env.DB_USR,
        password: process.env.DB_PASS
      }
    },
  }
})

module.exports = sequelize;