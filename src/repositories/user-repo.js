const { randomUUID } = require("crypto");

const db = require("../db");

class UserRepo {
  async create({ email, password, nickname }) {
    const id = randomUUID();
    await db.query(
      `insert into "user"("uid", "email", "password", "nickname") values($1, $2, $3, $4)`,
      [id, email, password, nickname]
    );
    return this.findUserById(id);
  }

  async update({ id, email, password, nickname }) {
    const result = await db.query(
      `update "user" set "email" = $2, "password" = $3, "nickname" = $4 where "uid" = $1`,
      [id, email, password, nickname]
    );

    return result.rows[0];
  }

  async findUserById(id) {
    const result = await db.query(`select * from "user" where "uid" = $1`, [
      id,
    ]);
    return result.rows[0];
  }

  async deleteUserById(id) {
    await db.query(`delete * from "user" where "uid" = $1`, [id]);
  }

  async findByEmail(email) {
    const result = await db.query(`select * from "user" where "email" = $1`, [
      email,
    ]);
    return result.rows[0];
  }
}

module.exports = new UserRepo();
