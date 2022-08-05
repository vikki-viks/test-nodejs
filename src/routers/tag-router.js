const Router = require("express");
const tagController = require("../controllers/tag-controller");
const router = new Router();

router.post("/tag", tagController.tag);
router.get("/tag:id", tagController.getTagId);
router.put("/tag:id", tagController.putTagId);
router.delete("/tag:id", tagController.deleteTagId);

module.exports = router;
