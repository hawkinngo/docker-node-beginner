const express = require("express");

const authController = require("../controllers/authController");

const router = express();

router.get("/", authController.getAllUsers);
router.post("/signup", authController.signUp);
router.post("/login", authController.login);

module.exports = router;
