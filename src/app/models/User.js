import Sequelize, { Model } from "sequelize";

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        login: Sequelize.STRING,
        password: Sequelize.STRING,
        custom_1: Sequelize.STRING,
        custom_2: Sequelize.STRING,
        custom_3: Sequelize.STRING,
        custom_4: Sequelize.STRING,
        custom_5: Sequelize.STRING,
        status: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
  }
}

export default User;
