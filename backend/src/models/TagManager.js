const AbstractManager = require("./AbstractManager");

class TwildManager extends AbstractManager {
  constructor() {
    super({ table: "tag" });
  }

  insert({ name }) {
    return this.database.query(`insert into ${this.table} (name) values (?)`, [
      name,
    ]);
  }
}

module.exports = TwildManager;
