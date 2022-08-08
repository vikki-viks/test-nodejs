const { randomUUID } = require("crypto");
const db = require("../db");

class TagRepo {
  async findTagById(id) {
    const result = await db.query(`select * from "tag" where "id" = $1`, [id]);
    return result.rows[0];
  }

  async update({ id, name, sortOrder }) {}

  async deleteTagById(id) {
    await db.query(`delete * from "tag" where "id" = $1`, [id]);
  }

  async create({ userId, name, sortOrder }) {
    const id = randomUUID();
    await db.query(
      `insert into "user"("id", "creator", "name", "sortOrder") values($1, $2, $3, $4)`,
      [id, userId, name, sortOrder]
    );
    return this.findTagById(id);
  }
}

module.exports = new TagRepo();
