const userController = require('../controller/user.controller');

const express = require('express');
const router = express.Router();

router.post("/register", userController.register);
router.post("/login", userController.login);
router.get("/user-profile", userController.userProfile);
router.get("/allRoles", userController.getAllRoles);
router.get("/allDepartments", userController.getAllDepartments);

module.exports = router;