// require("dotenv").config();

// const express=require("express");

// const {connectDB}=require("./config/mysql");


// const app=express();


// app.use(express.json());


// const studentRoutes=require("./routes/studentRoutes");

// app.use("/students",studentRoutes);



// connectDB();


// app.listen(process.env.PORT,()=>{

// console.log(`Server running on port ${process.env.PORT}`);

// });   


require("dotenv").config();

const express=require("express");

const {connectDB}=require("./config/mysql");

const connectMongoDB=require("./config/mongodb");


const app=express();


app.use(express.json());


const studentRoutes=require("./routes/studentRoutes");
const resultRoutes=require("./routes/resultRoutes");


app.use("/students",studentRoutes);
app.use("/results",resultRoutes);



connectDB();

connectMongoDB();



app.listen(process.env.PORT,()=>{

console.log(
`Server running on port ${process.env.PORT}`
);

});