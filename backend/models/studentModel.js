const { getDB } = require("../config/mysql");

async function getStudents(){

    const db=getDB();

    const [rows]=await db.query("SELECT * FROM students");

    return rows;
}

async function getStudent(id){

    const db=getDB();

    const [rows]=await db.query(
        "SELECT * FROM students WHERE id=?",
        [id]
    );

    return rows[0];
}

async function addStudent(student){

    const db=getDB();

    const {name,email,phone,department}=student;

    await db.query(
        `INSERT INTO students(name,email,phone,department)
        VALUES(?,?,?,?)`,
        [name,email,phone,department]
    );
}

async function updateStudent(id,student){

    const db=getDB();

    const {name,email,phone,department}=student;

    await db.query(
        `UPDATE students
        SET name=?,email=?,phone=?,department=?
        WHERE id=?`,
        [name,email,phone,department,id]
    );
}

async function deleteStudent(id){

    const db=getDB();

    await db.query(
        "DELETE FROM students WHERE id=?",
        [id]
    );
}

module.exports={
    getStudents,
    getStudent,
    addStudent,
    updateStudent,
    deleteStudent
};