"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "courses",
      [
        {
          name: "Programação Orientada a Objetos",
          code: "poo-2022",
          description: "Curso de Programação Orientada a Objetos",
          term_id: "1",
          start_date: "2022-07-01",
          end_date: "2022-07-31",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Estrutura da Dados",
          code: "edd-2022",
          description: "Curso de Estrutura de Dados",
          term_id: "1",
          start_date: "2022-07-01",
          end_date: "2022-07-31",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Banco de Dados",
          code: "bd-2022",
          description: "Curso de Banco de Dados",
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("courses", null, {});
  },
};
