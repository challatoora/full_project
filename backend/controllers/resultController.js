const resultModel = require("../models/resultModel");


// ADD RESULT
exports.addResult = async(req,res)=>{

    try{

        const result = await resultModel.addResult(req.body);

        res.status(201).json({
            message:"Result Added Successfully",
            result
        });

    }
    catch(error){

        console.log("ADD RESULT ERROR:",error);

        res.status(500).json({
            message:error.message
        });

    }

};



// GET ALL RESULTS
exports.getResults = async(req,res)=>{

    try{

        const results = await resultModel.getResults();

        res.json(results);

    }
    catch(error){

        console.log("GET RESULTS ERROR:",error);

        res.status(500).json({
            message:error.message
        });

    }

};



// GET RESULT BY ID
exports.getResult = async(req,res)=>{

    try{

        const result = await resultModel.getResult(req.params.id);


        res.json(result);

    }
    catch(error){

        console.log("GET RESULT ERROR:",error);

        res.status(500).json({
            message:error.message
        });

    }

};



// GET RESULTS BY STUDENT ID
exports.getResultByStudent = async(req,res)=>{

    try{

        const results =
        await resultModel.getResultByStudent(
            req.params.studentId
        );


        res.json(results);

    }
    catch(error){

        console.log("GET STUDENT RESULT ERROR:",error);

        res.status(500).json({
            message:error.message
        });

    }

};



// UPDATE RESULT
exports.updateResult = async(req,res)=>{

    try{

        await resultModel.updateResult(
            req.params.id,
            req.body
        );


        res.json({
            message:"Result Updated Successfully"
        });

    }
    catch(error){

        console.log("UPDATE RESULT ERROR:",error);

        res.status(500).json({
            message:error.message
        });

    }

};



// DELETE RESULT
exports.deleteResult = async(req,res)=>{

    try{

        await resultModel.deleteResult(
            req.params.id
        );


        res.json({
            message:"Result Deleted Successfully"
        });

    }
    catch(error){

        console.log("DELETE RESULT ERROR:",error);

        res.status(500).json({
            message:error.message
        });

    }

};