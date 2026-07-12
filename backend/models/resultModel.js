const mongoose=require("mongoose");


const resultSchema=new mongoose.Schema({

    studentId:{
        type:Number,
        required:true
    },


    semester:{
        type:Number,
        required:true
    },


    subjects:[

        {

            name:String,

            marks:Number

        }

    ],


    percentage:Number,


    grade:String


},
{
    timestamps:true
});


module.exports =
mongoose.model(
"Result",
resultSchema
);