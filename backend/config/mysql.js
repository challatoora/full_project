// const mysql = require("mysql2/promise");
// require("dotenv").config();

// let connection;

// async function connectMySQL() {

//     connection = await mysql.createConnection({
//         host: process.env.MYSQL_HOST,
//         user: process.env.MYSQL_USER,
//         password: process.env.MYSQL_PASSWORD,
//         database: process.env.MYSQL_DATABASE
//     });

//     console.log("MySQL Connected");
// }

// function getConnection() {
//     return connection;
// }

// module.exports = {
//     connectMySQL,
//     getConnection
// };


const mysql = require("mysql2/promise");

let db;

async function connectMySQL() {

    db = await mysql.createConnection({
        host: process.env.MYSQL_HOST,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD
    });

    console.log("MySQL Connected");

    await db.query("CREATE DATABASE IF NOT EXISTS studentdb");

    await db.query("USE studentdb");

    await db.query(`
        CREATE TABLE IF NOT EXISTS students (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(100),
            email VARCHAR(100),
            phone VARCHAR(20),
            department VARCHAR(100)
        )
    `);

    console.log("Student table ready.");
}

module.exports = {
    connectMySQL,
    db
};