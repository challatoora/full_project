const mongoose = require("mongoose");


// Result Schema

const resultSchema = new mongoose.Schema(
{
    studentId:{
        type:Number,
        required:true
    },

    semester:{
        type:Number,
        required:true
    },

    grade:{
        type:String,
        required:true
    },

    subjects:[
        {
            name:{
                type:String,
                required:true
            },

            marks:{
                type:Number,
                required:true
            }
        }
    ]

},
{
    timestamps:true
}
);


// Create Model

const Result = mongoose.model(
    "Result",
    resultSchema
);



// ADD RESULT

async function addResult(data){

    const result = new Result(data);

    return await result.save();

}



// GET ALL RESULTS

async function getResults(){

    return await Result.find();

}



// GET RESULT BY ID

async function getResult(id){

    return await Result.findById(id);

}



// GET RESULTS BY STUDENT ID

async function getResultByStudent(studentId){

    return await Result.find({
        studentId:studentId
    });

}



// UPDATE RESULT

async function updateResult(id,data){

    return await Result.findByIdAndUpdate(
        id,
        data,
        {
            new:true
        }
    );

}



// DELETE RESULT

async function deleteResult(id){

    return await Result.findByIdAndDelete(id);

}



module.exports = {

    addResult,
    getResults,
    getResult,
    getResultByStudent,
    updateResult,
    deleteResult

};