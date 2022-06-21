import Sequelize, { Model } from "sequelize";

class CoursesUser extends Model {
  static init(sequelize) {
    super.init(
      {
        course_id: Sequelize.INTEGER,
        user_id: Sequelize.INTEGER,
        status: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
  }
}

export default CoursesUser;
