const express = require("express");
const { registerUser, loginUser } = require("../controllers/userController");

const { authMiddleWare } = require("../middlewares/middleware");

const router = express.Router();

router.get("/register", registerUser);
router.get("/login", loginUser);

router.use(authMiddleWare);

module.exports = router;