const mysql = require("mysql2/promise");
require("dotenv").config();

let connection;

async function connectMySQL() {

    connection = await mysql.createConnection({
        host: process.env.MYSQL_HOST,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DATABASE
    });

    console.log("MySQL Connected");
}

function getConnection() {
    return connection;
}

module.exports = {
    connectMySQL,
    getConnection
};