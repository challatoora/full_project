const mysql = require("../config/mysql");

const Student = {

    getAllStudents: async () => {
        const [rows] = await mysql.query("SELECT * FROM students");
        return rows;
    },

    getStudentById: async (id) => {
        const [rows] = await mysql.query(
            "SELECT * FROM students WHERE id=?",
            [id]
        );
        return rows[0];
    },

    addStudent: async (student) => {

        const { name, email, phone, department } = student;

        await mysql.query(
            "INSERT INTO students(name,email,phone,department) VALUES(?,?,?,?)",
            [name,email,phone,department]
        );
    },

    updateStudent: async (id, student) => {

        const { name,email,phone,department } = student;

        await mysql.query(
            "UPDATE students SET name=?,email=?,phone=?,department=? WHERE id=?",
            [name,email,phone,department,id]
        );
    },

    deleteStudent: async(id)=>{

        await mysql.query(
            "DELETE FROM students WHERE id=?",
            [id]
        );
    }

}

module.exports = Student;