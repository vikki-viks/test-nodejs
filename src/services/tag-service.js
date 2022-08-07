const tagRepo = require("../repositories/tag-repo");

class TagService {
  async createTag({ userId, name, sortOrder }) {
    const tag = await tagRepo.create({ userId, name, sortOrder });
    return tag;
  }

  async getTag({ id }) {
    const tag = await tagRepo.findTagById(id);
    return tag;
  }

  async editTag({ id, name, sortOrder, userId }) {
    const tag = await tagRepo.findTagById(id);
    if (tag.creator.uid !== userId) {
      throw new Error();
    }
    const updatedTag = await tagRepo.update({ id, name, sortOrder });
    return updatedTag;
  }

  async deleteTag({ id, userId }) {
    const tag = await tagRepo.findTagById(id);
    if (tag.creator.uid !== userId) {
      throw new Error();
    }
    await tagRepo.deleteTagById(id);
  }
}

module.exports = new TagService();
