class UserTagService {
  async createUserTags({ tags }) {
    for (const tagId of tags) {
      const tag = await tagRepo.findTagById(tagId);
      if (tag === undefined) {
        throw new Error();
      }
    }
    const userTag = await userTagRepo.createMany(tags);
    return userTag;
  }

  async getMyUserTag({ id }) {
    const userTag = await userTagRepo.findUserTagByUserId(id);
    return userTag;
  }

  async deleteUserTag({ id, userId }) {
    await userTagRepo.deleteUserTagById(id);
    return userTagRepo.findUserTagByUserId(userId);
  }
}

module.exports = new UserTagService();
