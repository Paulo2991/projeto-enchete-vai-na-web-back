const pool = require("../config/db");

class BaseService {
  constructor(tableName) {
    this.tableName = tableName;
  }

  async findAll() {
    const query = `SELECT * FROM ${this.tableName}`;
    const result = await pool.query(query);
    return result.rows;
  }

  async findById(id) {
    const query = `SELECT * FROM ${this.tableName} WHERE id = $1`;
    const result = await pool.query(query, [id]);
    return result.rows[0] || null;
  }

  async create(data) {
    const fields = Object.keys(data).join(", ");
    const placeholders = Object.keys(data)
      .map((_, i) => `$${i + 1}`)
      .join(", ");
    const query = `
      INSERT INTO ${this.tableName} (${fields})
      VALUES (${placeholders})
      RETURNING *
    `;
    const values = Object.values(data);
    const result = await pool.query(query, values);
    return result.rows[0];
  }
}

module.exports = BaseService;
