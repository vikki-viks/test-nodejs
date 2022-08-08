const { randomUUID } = require("crypto");

const db = require("../db");

class UserTagRepo {
  async createMany(tags) {
    const id = randomUUID();
    await db.query(
      `insert into "user"("id", "uid", "tagId") values($1, $2, $3)`,
      [id, email, password, nickname]
    );
    const result = await db.query(`select * from "user_tag" where "id" = $1`, [
      id,
    ]);
    return result.rows[0];
  }

  async findUserTagByUserId(id) {
    const result = await db.query(`select * from "user_tag" where "uid" = $1`, [
      id,
    ]);
    return result.rows[0];
  }

  async deleteUserTagById(id) {
    const result = await db.query(`delete * from "user_tag" where "uid" = $1`, [
      id,
    ]);
    return result.rows[0];
  }
}

module.exports = new UserTagRepo();
