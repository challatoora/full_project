const db = require("../config/db");


exports.addStudent = (req,res)=>{

    const {
        name,
        email,
        phone,
        department
    } = req.body;


    // Validation

    if(!name || !email || !phone || !department){

        return res.status(400).json({

            message:"All fields are required"

        });

    }


    const sql = `
    INSERT INTO students
    (name,email,phone,department)
    VALUES(?,?,?,?)
    `;


    db.query(
        sql,
        [name,email,phone,department],
        (err,result)=>{


            if(err){

                console.log(err);

                return res.status(500).json({

                    message:"Database Error"

                });

            }


            res.status(201).json({

                message:"Student Added Successfully",

                id:result.insertId

            });


        }
    );

};