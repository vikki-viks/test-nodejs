const Router = require("express");
const router = new Router();

router.use("/", auth - router);
router.use("/rolls", rollsRouter);
router.use("/amount", rollsAmountRouter);

module.exports = router;
