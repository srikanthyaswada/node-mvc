const express = require("express");
const router = express.Router();
const userController = require("../controllers/user_controller");
const cors = require("cors");

const corsOptions = {
  origin: ["http://localhost:4000"],
};

router.post("/register", cors(corsOptions), userController.registerUser);
router.post("/login", cors(corsOptions), userController.login);
router.get("/userprofile/:id", cors(corsOptions), userController.userProfile);
module.exports = router;
