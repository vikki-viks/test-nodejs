const uuid = require("uuid");
const path = require("path");
const ApiError = require("../error/ApiError");
const userService = require("../services/user-service");

class UserController {
  async getAll(req, res) {
    const { email, nickname, tags } = req.body;
    const mappedRolls = await rollsService.getAll({
      typeId,
      limit,
      page,
    });
    return res.json(mappedRolls);
  }

  async getUser(req, res) {
    const { email, nickname, tags } = req.body;
    const user = await userService.getUser({
      email,
      nickname,
      tags,
    });
    return res.json(rolls);
  }
}

module.exports = new UserController();
