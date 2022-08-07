const userTagService = require("../services/user-tag-service");
const authService = require("../services/auth-service");

class UserTagController {
  async createUserTags(req, res) {
    const token = req.headers.Authorization.split(" ")[1];
    authService.identify(token);
    const { tags } = req.body;
    const userTag = await userTagService.createUserTags({
      tags,
    });
    return res.json(userTag);
  }

  async getMyUserTag(req, res) {
    const token = req.headers.Authorization.split(" ")[1];
    const id = authService.identify(token);
    const userTag = await userTagService.getMyUserTag({
      id,
    });
    return res.json(userTag);
  }

  async deleteUserTag(req, res) {
    const token = req.headers.Authorization.split(" ")[1];
    const userId = authService.identify(token);
    const { id } = req.params;
    const userTag = await userTagService.deleteUserTag({
      id,
      userId,
    });
    return res.json(userTag);
  }
}

module.exports = new UserTagController();
