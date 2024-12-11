'use strict';
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('usuarios', { 
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      data_nascimento: Sequelize.DATEONLY,
      cpf: {
        type: Sequelize.STRING,
        unique: true,
      },
      foto: Sequelize.STRING,
      telefone: Sequelize.STRING,
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      senha: {
        type: Sequelize.STRING,
        allowNull: false,
      },
       admin: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
       turma: {
        type: Sequelize.STRING,
        allowNull: false,
      }
    });
  },

  async down (queryInterface, Sequelize) {
      await queryInterface.dropTable("usuarios");
  },
};
