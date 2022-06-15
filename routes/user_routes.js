const router = require("express").Router();
const authController = require("../controllers/auth_controller");
const userController = require("../controllers/user_controller");

// Autentification
router.post("/register", authController.signUp);

router.get("/", userController.getAllUsers);
router.get("/:id", userController.userInfo);

module.exports = router;
