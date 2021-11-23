const mysql = require('mysql');

const config = {
    host: '192.168.56.1',
    user: 'api',
    password: 'api',
    database: 'api',
};

//Create a Mysql pool
const pool = mysql.createPool(config);

module.exports = pool;