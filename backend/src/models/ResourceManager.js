const AbstractManager = require("./AbstractManager");

class ResourceManager extends AbstractManager {
  constructor() {
    super({ table: "resource" });
  }

  findWithComments(id) {
    return this.database.query(
      `select
        ${this.table}.${this.visible},
        if(
          count(comment.content) = 0,
          json_array(),
          json_arrayagg(
            json_object(
              "id", comment.id,
              "user_id", comment.user_id,
              "content", comment.content,
              "created_at", comment.created_at
            )
          )
        ) as comments
        from ${this.table}
        left join comment on ${this.table}.id = comment.${this.table}_id
        where ${this.table}.id = ? limit 1`,
      [id]
    );
  }

  insert({ uri }) {
    return this.database.query(`insert into ${this.table} (uri) values (?)`, [
      uri,
    ]);
  }
}

module.exports = ResourceManager;
