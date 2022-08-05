const Router = require("express");
const userController = require("../controllers/user-controller");
const router = new Router();

router.get("/user", userController.userGet);
router.put("/user", userController.userPut);
router.delete("/user", userController.userDelete);

module.exports = router;
