const AbstractManager = require("./AbstractManager");

class ResourceManager extends AbstractManager {
  constructor() {
    super({ table: "resource" });
  }

  insert({ uri }) {
    return this.database.query(`insert into ${this.table} (uri) values (?)`, [
      uri,
    ]);
  }
}

module.exports = ResourceManager;
