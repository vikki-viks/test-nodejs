const Router = require("express");
const authController = require("../controllers/auth-controller");
const router = new Router();

router.post("/signin", authController.register);
router.post("/login", authController.login);
router.post("/logout", authController.logout);

module.exports = router;
