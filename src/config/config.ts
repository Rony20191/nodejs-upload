const path = require('path')
require('dotenv').config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' :'.env'
})
module.exports = {
    username: process.env.BD_USERNAME,
    password: process.env.BD_PASSWORD,
    database: process.env.BD_NAME,
    host: process.env.BD_HOST,
    dialect: process.env.BD_DIALECT  || "mysql",
    define: {
        timestamps: true
    }
}
