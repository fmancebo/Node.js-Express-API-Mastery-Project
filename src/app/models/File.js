import Sequelize, { Model } from "sequelize";

class File extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        path: Sequelize.STRING,
      },
      {
        sequelize,
        name: {
          singular: "file",
          plural: "files",
        },
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: "user_id" });
  }
}

export default File;
