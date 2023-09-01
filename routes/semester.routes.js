const semesterController = require('../controller/semester.controller');

const express = require('express');
const router = express.Router();

router.post("/getAllSemesterForCourse", semesterController.getAllSemesterForCourse);

module.exports = router;