"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "terms",
      [
        {
          name: "2022-07",
          code: "202207",
          start_date: "2022-07-01",
          end_date: "2022-07-31",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "2022-08",
          code: "202208",
          start_date: "2022-08-01",
          end_date: "2022-08-31",
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("terms", null, {});
  },
};
