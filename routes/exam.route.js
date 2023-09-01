const examController = require('../controller/exam.controller');
const express = require('express');
const router = express.Router();

router.post("/createNewExam", examController.createNewExam);
router.get("/getAllExam", examController.getAllExam);
router.post("/getAllExamFormByExam", examController.getAllExamFormByExam);
router.post("/applyForExams", examController.applyForExams);
router.post("/checkWhetherApplicationExist", examController.checkWhetherApplicationExist);

module.exports = router;