import Sequelize, { Model } from "sequelize";

class Term extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        code: Sequelize.STRING,
        start_date: Sequelize.DATE,
        end_date: Sequelize.DATE,
        status: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
  }
}

export default Term;
