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


require("dotenv").config();

const mysql = require("mysql2/promise");

let pool;


async function connectDB(){

    pool = mysql.createPool({

        host: process.env.DB_HOST,

        user: process.env.DB_USER,

        password: process.env.DB_PASSWORD,

        database: process.env.DB_NAME

    });


    console.log("MySQL Database Connected Successfully");

}


function getDB(){

    return pool;

}


module.exports = {
    connectDB,
    getDB
};