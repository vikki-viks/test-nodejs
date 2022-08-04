const jwt = require("jsonwebtoken");
const authService = require("../services/auth-service");

const generateJwt = (email, password, nickname) => {
  return jwt.sign({ password, email, nickname }, process.env.SECRET_KEY, {
    expiresIn: "24h",
  });
};
