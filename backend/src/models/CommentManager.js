const AbstractManager = require("./AbstractManager");

class CommentManager extends AbstractManager {
  constructor() {
    super({ table: "comment" });
  }

  insert(data) {
    return this.database.query(
      `insert into ${this.table} (user_id, resource_id, content) values (?, ?, ?)`,
      [data.user_id, data.resource_id, data.content]
    );
  }
}

module.exports = CommentManager;
