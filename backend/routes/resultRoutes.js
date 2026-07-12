const express = require("express");

const router = express.Router();

const resultController = require("../controllers/resultController");


// Add Result
router.post(
    "/",
    resultController.addResult
);


// Get All Results
router.get(
    "/",
    resultController.getResults
);


// Get Result By Mongo ID
router.get(
    "/:id",
    resultController.getResult
);


// Get Results By Student ID
router.get(
    "/student/:studentId",
    resultController.getResultByStudent
);


// Update Result
router.put(
    "/:id",
    resultController.updateResult
);


// Delete Result
router.delete(
    "/:id",
    resultController.deleteResult
);


module.exports = router;