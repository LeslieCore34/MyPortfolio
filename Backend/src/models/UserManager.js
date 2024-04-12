const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "projects" });
  }

  async addOne(item) {
    const { image } = item;
    console.log("image in manager", item);

    try {
      const [result] = await this.database.query(
        `INSERT INTO ${this.table} (image) VALUES (?)`,
        [image]
      );

      return result;
    } catch (error) {
      throw new Error(
        `Erreur lors de l'insertion de l'image : ${error.message}`
      );
    }
  }
}

module.exports = UserManager;
