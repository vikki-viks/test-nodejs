const Router = require("express");
const router = new Router();

router.post("/signin", authController.registration);
router.post("/login", authController.login);
router.post("/logout", authController);

module.exports = router;
