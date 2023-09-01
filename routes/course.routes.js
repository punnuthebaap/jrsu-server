const courseController = require('../controller/course.controller');

const express = require('express');
const router = express.Router();

router.get("/getAllcourse", courseController.getAllCourse);

module.exports = router;