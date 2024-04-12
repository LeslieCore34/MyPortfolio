const database = require("../../database/clients");

class AbstractManager {
  constructor({ table }) {
    this.table = table;
    this.database = database;
  }
}

module.exports = AbstractManager;
