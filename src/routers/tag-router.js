const Router = require("express");
const tagController = require("../controllers/tag-controller");

const router = new Router();

router.post("/tag", tagController.createTag);
router.get("/tag/:id", tagController.getTag);
router.put("/tag/:id", tagController.editTag);
router.delete("/tag/:id", tagController.deleteTag);

module.exports = router;
