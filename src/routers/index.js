const Router = require("express");

const router = new Router();
const authRouter = require("./auth-router");
const userRouter = require("./user-router");
const tagRouter = require("./tag-router");
const userTagRouter = require("./user-tag-router");

router.use("/", authRouter);
router.use("/", userRouter);
router.use("/", tagRouter);
router.use("/", userTagRouter);

module.exports = router;
