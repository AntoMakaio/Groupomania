const router = require("express").Router();
const authController = require("../controllers/auth_controller");
const userController = require("../controllers/user_controller");
const uploadController = require("../controllers/upload_controller");
const multer = require("multer");
const upload = multer();

// Autentification
router.post("/register", authController.signUp);
router.post("/login", authController.signIn);
router.get("/logout", authController.logout);

router.get("/", userController.getAllUsers);
router.get("/:id", userController.userInfo);
router.delete("/:id", userController.deleteUser);

router.post("/upload", upload.single("file"), uploadController.uploadProfil);

module.exports = router;
