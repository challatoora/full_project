const Student = require("../models/studentModel");

exports.getStudents = async(req,res)=>{

    const students = await Student.getAllStudents();

    res.json(students);

}

exports.getStudent = async(req,res)=>{

    const student = await Student.getStudentById(req.params.id);

    res.json(student);

}

exports.addStudent = async(req,res)=>{

    await Student.addStudent(req.body);

    res.json({
        message:"Student Added Successfully"
    });

}

exports.updateStudent = async(req,res)=>{

    await Student.updateStudent(req.params.id,req.body);

    res.json({
        message:"Student Updated Successfully"
    });

}

exports.deleteStudent = async(req,res)=>{

    await Student.deleteStudent(req.params.id);

    res.json({
        message:"Student Deleted Successfully"
    });

}