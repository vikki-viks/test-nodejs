const Router = require("express");

const userTagController = require("../controllers/user-tag-controller");

const router = new Router();

router.post("/user/tag", userTagController.createUserTag);
router.delete("/user/tag/:id", userTagController.deleteUserTag);
router.get("/user/tag/my", userTagController.getMyUserTag);

module.exports = router;
