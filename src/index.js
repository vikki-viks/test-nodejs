require("dotenv").config();
const express = require("express");
const cors = require("cors");
const router = require("./routers/index");
const errorHandler = require("./middleware/ErrorHandingMiddleware");

const PORT = process.env.PORT || 3000;

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.use(errorHandler);

const start = async () => {
  try {
    app.listen(PORT, () => console.log("server started "));
  } catch (e) {
    console.log(e);
  }
};

start();
