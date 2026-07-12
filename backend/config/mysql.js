require("dotenv").config();

const mysql = require("mysql2/promise");

let pool;


async function connectDB(){

    try{

        pool = mysql.createPool({

            host: process.env.DB_HOST,

            user: process.env.DB_USER,

            password: process.env.DB_PASSWORD,

            database: process.env.DB_NAME,

            waitForConnections:true,

            connectionLimit:10,

            queueLimit:0

        });


        await pool.query("SELECT 1");


        console.log("MySQL Database Connected Successfully");


    }
    catch(error){

        console.log("MySQL Connection Failed:");
        console.log(error.message);

        process.exit(1);

    }

}


function getDB(){

    return pool;

}


module.exports = {
    connectDB,
    getDB
};