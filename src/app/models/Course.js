import Sequelize, { Model } from "sequelize";

class Course extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        code: Sequelize.STRING,
        term_id: Sequelize.INTEGER,
        description: Sequelize.TEXT,
        custom_1: Sequelize.STRING,
        custom_2: Sequelize.STRING,
        custom_3: Sequelize.STRING,
        custom_4: Sequelize.STRING,
        custom_5: Sequelize.STRING,
        status: Sequelize.STRING,
        start_date: Sequelize.DATE,
        end_date: Sequelize.DATE,
      },
      {
        sequelize,
      }
    );
  }
}

export default Course;
