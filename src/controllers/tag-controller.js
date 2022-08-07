const tagService = require("../services/tag-service");
const authService = require("../services/auth-service");

class TagController {
  async createTag(req, res) {
    const token = req.headers.Authorization.split(" ")[1];
    const userId = authService.identify(token);
    const { name, sortOrder } = req.body;
    const tag = await tagService.createTag({
      userId,
      name,
      sortOrder,
    });
    return res.json(tag);
  }

  async getTag(req, res) {
    const token = req.headers.Authorization.split(" ")[1];
    authService.identify(token);
    const { id } = req.params;
    const tag = await tagService.getTag({
      id,
    });
    return res.json(tag);
  }

  async deleteTag(req, res) {
    const token = req.headers.Authorization.split(" ")[1];
    const userId = authService.identify(token);
    const { id } = req.params;
    const tag = await tagService.deleteTag({
      id,
      userId,
    });
    return res.json(tag);
  }

  async editTag(req, res) {
    const token = req.headers.Authorization.split(" ")[1];
    const userId = authService.identify(token);
    const { id } = req.params;
    const { name, sortOrder } = req.body;
    const tag = await tagService.editTag({
      id,
      name,
      sortOrder,
      userId,
    });
    return res.json(tag);
  }
}

module.exports = new TagController();
