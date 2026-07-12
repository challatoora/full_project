const studentModel = require("../models/studentModel");


// GET ALL STUDENTS
exports.getStudents = async (req,res)=>{

    try{

        const students = await studentModel.getStudents();

        res.json(students);

    }
    catch(error){

        console.log("GET STUDENTS ERROR:");
        console.log(error);

        res.status(500).json({
            message:error.message || "Internal Server Error"
        });

    }

};



// GET STUDENT BY ID
exports.getStudent = async (req,res)=>{

    try{

        const student = await studentModel.getStudent(req.params.id);

        res.json(student);

    }
    catch(error){

        console.log("GET STUDENT ERROR:");
        console.log(error);

        res.status(500).json({
            message:error.message || "Internal Server Error"
        });

    }

};



// ADD STUDENT
exports.addStudent = async(req,res)=>{

    try{

        const {
            name,
            email,
            phone,
            department
        } = req.body;


        if(!name || !email || !phone || !department){

            return res.status(400).json({

                message:"All fields are required"

            });

        }


        await studentModel.addStudent(req.body);


        res.status(201).json({

            message:"Student Added Successfully"

        });


    }
    catch(error){

        console.log("ADD STUDENT ERROR:");
        console.log(error);

        res.status(500).json({

            message:error.message || "Internal Server Error"

        });

    }

};



// UPDATE STUDENT
exports.updateStudent = async(req,res)=>{

    try{

        await studentModel.updateStudent(
            req.params.id,
            req.body
        );


        res.json({

            message:"Student Updated Successfully"

        });


    }
    catch(error){

        console.log("UPDATE STUDENT ERROR:");
        console.log(error);

        res.status(500).json({

            message:error.message || "Internal Server Error"

        });

    }

};



// DELETE STUDENT
exports.deleteStudent = async(req,res)=>{

    try{

        await studentModel.deleteStudent(req.params.id);


        res.json({

            message:"Student Deleted Successfully"

        });


    }
    catch(error){

        console.log("DELETE STUDENT ERROR:");
        console.log(error);

        res.status(500).json({

            message:error.message || "Internal Server Error"

        });

    }

};