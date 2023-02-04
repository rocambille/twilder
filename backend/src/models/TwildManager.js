const AbstractManager = require("./AbstractManager");

class TwildManager extends AbstractManager {
  constructor() {
    super({ table: "twild" });
  }

  insert({ url }) {
    return this.database.query(`insert into ${this.table} (url) values (?)`, [
      url,
    ]);
  }
}

module.exports = TwildManager;
