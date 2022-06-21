"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "courses_users",
      [
        {
          user_id: "2",
          course_id: "1",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: "2",
          course_id: "2",
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("courses_users", null, {});
  },
};
