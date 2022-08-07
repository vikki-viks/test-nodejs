const { randomUUID } = require("crypto");

const db = require("../db");

class UserRepo {
  async create({ email, password, nickname }) {
    const id = randomUUID();
    await db.query(
      `insert into "user"("uid", "email", "password", "nickname") values($1, $2, $3, $4)`,
      [id, email, password, nickname]
    );
    const result = await db.query(`select * from "user" where "uid" = $1`, [
      id,
    ]);
    return result.rows[0];
  }

  async update({ id, email, password, nickname }) {}

  async findUserById(id) {}

  async deleteUserById(id) {}

  async findByEmail(email) {}
}

module.exports = new UserRepo();
