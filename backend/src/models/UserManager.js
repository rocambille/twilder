const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({
      table: "user",
      visible: "id, email, created_at, updated_at, deleted_at",
    });
  }

  findByEmailWithPassword(email) {
    return this.database.query(
      `select ${this.visible}, hashedPassword from ${this.table} where email = ?`,
      [email]
    );
  }

  insert({ email, hashedPassword }) {
    return this.database.query(
      `insert into ${this.table} (email, hashedPassword) values (?, ?)`,
      [email, hashedPassword]
    );
  }
}

module.exports = UserManager;
