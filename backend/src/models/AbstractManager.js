class AbstractManager {
  constructor({ table, visible = "*" }) {
    this.table = table;
    this.visible = visible;
  }

  find(id) {
    return this.database.query(
      `select ${this.visible} from ${this.table} where id = ?`,
      [id]
    );
  }

  findAll() {
    return this.database.query(`select ${this.visible} from ${this.table}`);
  }

  update({ id, ...fields }) {
    return this.database.query(`update ${this.table} set ? where id = ?`, [
      fields,
      id,
    ]);
  }

  delete(id) {
    return this.database.query(`delete from ${this.table} where id = ?`, [id]);
  }

  setDatabase(database) {
    this.database = database;
  }
}

module.exports = AbstractManager;
