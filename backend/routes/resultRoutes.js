const express=require("express");

const router=express.Router();


const resultController =
require("../controllers/resultController");


router.post(
"/",
resultController.addResult
);


router.get(
"/",
resultController.getResults
);


router.get(
"/student/:studentId",
resultController.getResultByStudent
);


module.exports=router;