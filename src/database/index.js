import Sequelize from "sequelize";
import databaseConfig from "../config/database";

import User from "../app/models/User";
import Term from "../app/models/Term";
import Course from "../app/models/Course";

const models = [User, Term, Course];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);
    models.map((model) => model.init(this.connection));
  }
}

export default new Database();
