const generalApiController = require('../controller/generalApi.controller');

const express = require('express');
const router = express.Router();

router.post("/getDeptById", generalApiController.getDeptById);
router.post("/getRoleById", generalApiController.getRoleById);
router.get("/getUserCount", generalApiController.getUserCount);
router.get("/getExamFormCount", generalApiController.getExamFormCount);
router.get("/getCoursesCount", generalApiController.getCoursesCount);
router.post("/getCurrentSemester", generalApiController.getCurrentSemester);
router.post("/getSemesterName", generalApiController.getSemesterName);
router.post("/getTotalSubjectsByCourse", generalApiController.getTotalSubjectsByCourse);

module.exports = router;