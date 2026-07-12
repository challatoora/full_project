const studentModel = require("../models/student");


// GET ALL STUDENTS
exports.getStudents = async (req,res)=>{

    try{

        const students = await studentModel.getStudents();

        res.json(students);

    }
    catch(error){

        res.status(500).json({
            message:error.message
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

        res.status(500).json({
            message:error.message
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

        res.status(500).json({

            message:error.message

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

        res.status(500).json({

            message:error.message

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

        res.status(500).json({

            message:error.message

        });

    }

};