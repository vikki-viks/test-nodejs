const userService = require("../services/user-service");
const authService = require("../services/auth-service");

class UserController {
  async editUser(req, res) {
    const token = req.headers.Authorization.split(" ")[1];
    const id = authService.identify(token);
    const { email, password, nickname } = req.body;
    const user = await userService.editUser({
      id,
      email,
      password,
      nickname,
    });
    return res.json(user);
  }

  async getUser(req, res) {
    const token = req.headers.Authorization.split(" ")[1];
    const id = authService.identify(token);
    const user = await userService.getUser({
      id,
    });
    return res.json(user);
  }

  async deleteUser(req, res) {
    const token = req.headers.Authorization.split(" ")[1];
    const id = authService.identify(token);
    const user = await userService.deleteUser({
      id,
    });
    return res.json(user);
  }
}

module.exports = new UserController();
