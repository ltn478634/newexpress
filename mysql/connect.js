const mysql = require('mysql')

const pool = mysql.createPool({
    host: 'localhost', // 主机名
    port: '3306', // 数据库的端口号
    user: 'admin', // 用户名
    password: '123456', // 密码
    database: 'expressFrame' // 数据库名
})

module.exports = pool
