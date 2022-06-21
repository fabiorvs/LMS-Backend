"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          name: "Fabio Roberto Vieira da Silva",
          email: "fabio@fabiorvs.dev.br",
          login: "fabio",
          password_hash:
            "$2a$08$mQJsomecx5qZPn5QTnsS7u/BhWNGSj9Gvka9Ye6Kd5u9u6B5GPhaq",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Aluno Teste",
          email: "aluno@teste.com",
          login: "aluno",
          password_hash:
            "$2a$08$mQJsomecx5qZPn5QTnsS7u/BhWNGSj9Gvka9Ye6Kd5u9u6B5GPhaq",
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
  },
};
