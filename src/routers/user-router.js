const Router = require("express");
const userController = require("../controllers/user-controller");
const router = new Router();

router.get("/user", userController.getUser);
router.put("/user", userController.editUser);
router.delete("/user", userController.deleteUser);

module.exports = router;
