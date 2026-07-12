const studentModel = require("../models/studentModel");


exports.getStudents = async (req,res)=>{

    try{

        const students = await studentModel.getStudents();

        res.json(students);

    }catch(error){

        res.status(500).json({
            message:error.message
        });

    }

};



exports.getStudent = async (req,res)=>{

    try{

        const student = await studentModel.getStudent(req.params.id);

        res.json(student);

    }catch(error){

        res.status(500).json({
            message:error.message
        });

    }

};



exports.addStudent = async (req,res)=>{

    try{

        await studentModel.addStudent(req.body);

        res.status(201).json({
            message:"Student Added Successfully"
        });

    }catch(error){

        res.status(500).json({
            message:error.message
        });

    }

};



exports.updateStudent = async(req,res)=>{

    try{

        await studentModel.updateStudent(
            req.params.id,
            req.body
        );


        res.json({
            message:"Student Updated Successfully"
        });


    }catch(error){

        res.status(500).json({
            message:error.message
        });

    }

};



exports.deleteStudent = async(req,res)=>{

    try{

        await studentModel.deleteStudent(req.params.id);


        res.json({
            message:"Student Deleted Successfully"
        });


    }catch(error){

        res.status(500).json({
            message:error.message
        });

    }

};