const { Rolls, RollsInfo, RollsAmount } = require("../models/models");
const mapper = require("../utils/mapper");

class UserService {
  async getAll({ limit, typeId, page }) {
    page = page || 1;
    limit = limit || 9;
    const offset = page * limit - limit;
    let rolls;
    if (!typeId) {
      rolls = await Rolls.findAndCountAll({
        limit,
        offset,
        include: [{ model: RollsAmount }],
      });
    } else {
      rolls = await Rolls.findAndCountAll({ where: { typeId }, limit, offset });
    }
    console.log(JSON.stringify(rolls, null, 2));
    const mappedRolls = mapper(rolls);
    return mappedRolls;
  }

  async getUser({ email, nickname, tags }) {
    const user = await userRepo.findUser({
      email,
      nickname,
      tags,
    });
    return rolls;
  }
}

module.exports = new UserService();
