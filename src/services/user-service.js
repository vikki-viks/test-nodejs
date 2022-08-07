class UserService {
  async editUser({ id, email, password, nickname }) {
    const user = await userRepo.update({ id, email, password, nickname });
    return user;
  }

  async getUser({ id }) {
    const user = await userRepo.findUserById(id);
    return user;
  }

  async deleteUser({ id }) {
    await userRepo.deleteUserById(id);
  }
}

module.exports = new UserService();
