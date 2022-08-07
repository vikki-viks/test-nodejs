class TagRepo {
  async findTagById(id) {}

  async update({ id, name, sortOrder }) {}

  async deleteTagById(id) {}

  async create({ userId, name, sortOrder }) {}
}

module.exports = new TagRepo();
