const { getDB } = require("../config/mysql");


// GET ALL STUDENTS
async function getStudents(){

    const db = getDB();

    const [rows] = await db.query(
        "SELECT * FROM students"
    );

    return rows;
}



// GET STUDENT BY ID
async function getStudent(id){

    const db = getDB();

    const [rows] = await db.query(
        "SELECT * FROM students WHERE id=?",
        [id]
    );

    return rows[0];
}



// ADD STUDENT
async function addStudent(student){

    const db = getDB();

    const {
        name,
        email,
        phone,
        department
    } = student;


    await db.query(
        `INSERT INTO students
        (name,email,phone,department)
        VALUES(?,?,?,?)`,
        [
            name,
            email,
            phone,
            department
        ]
    );
}



// UPDATE STUDENT
async function updateStudent(id,student){

    const db = getDB();

    const {
        name,
        email,
        phone,
        department
    } = student;


    await db.query(
        `UPDATE students
        SET name=?,
            email=?,
            phone=?,
            department=?
        WHERE id=?`,
        [
            name,
            email,
            phone,
            department,
            id
        ]
    );
}



// DELETE STUDENT
async function deleteStudent(id){

    const db = getDB();


    await db.query(
        "DELETE FROM students WHERE id=?",
        [id]
    );
}



// EXPORT FUNCTIONS
module.exports = {

    getStudents,

    getStudent,

    addStudent,

    updateStudent,

    deleteStudent

};