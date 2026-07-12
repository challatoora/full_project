require("dotenv").config();

const express=require("express");

const {connectDB}=require("./config/mysql");


const app=express();


app.use(express.json());


const studentRoutes=require("./routes/studentRoutes");

app.use("/students",studentRoutes);



connectDB();


app.listen(process.env.PORT,()=>{

console.log(`Server running on port ${process.env.PORT}`);

});