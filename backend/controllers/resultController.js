const Result=require("../models/resultModel");



// ADD RESULT

exports.addResult=async(req,res)=>{

    try{


        const result =
        await Result.create(req.body);


        res.status(201).json({

            message:"Result Added Successfully",

            result

        });


    }
    catch(error){

        res.status(500).json({

            message:error.message

        });

    }

};




// GET ALL RESULTS

exports.getResults=async(req,res)=>{

    try{


        const results =
        await Result.find();


        res.json(results);


    }
    catch(error){

        res.status(500).json({

            message:error.message

        });

    }

};



// GET RESULT BY STUDENT ID

exports.getResultByStudent=async(req,res)=>{

    try{


        const result =
        await Result.find({
            studentId:req.params.studentId
        });


        res.json(result);


    }
    catch(error){

        res.status(500).json({

            message:error.message

        });

    }

};