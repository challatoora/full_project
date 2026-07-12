const express=require("express");
const cors=require("cors");

const studentRoutes=require("./routes/studentRoutes");

const app=express();

app.use(cors());

app.use(express.json());

app.get("/",(req,res)=>{

    res.send("Student Result Management API Running...");

});

app.use("/students",studentRoutes);

module.exports=app;