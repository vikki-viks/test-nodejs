const authService = require("../services/auth-service");

class AuthController {
  async register(req, res, next) {
    const { email, password, nickname } = req.body;

    try {
      const { token, expiresIn } = await authService.register({
        email,
        password,
        nickname,
      });
      return res.json({ token, expire: expiresIn });
    } catch (e) {
      next(e);
    }
  }

  async login(req, res, next) {
    const { email, password } = req.body;

    try {
      const { token, expiresIn } = await authService.login({
        email,
        password,
      });
      return res.json({ token, expire: expiresIn });
    } catch (e) {
      next(e);
    }
  }
}
module.exports = new AuthController();
