const Router = require("express");
const userTagController = require("../controllers/user-tag-controller");
const router = new Router();

router.post("/user/tag", userTagController.postUserTag);
router.delete("/user/tag:id", userTagController.deleteUserTagId);
router.get("/user/tag/my", userTagController.getUserTagMy);

module.exports = router;
