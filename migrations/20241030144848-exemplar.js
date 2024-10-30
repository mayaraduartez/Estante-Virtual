'use strict';
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('exemplar', { 
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      descricao: Sequelize.STRING,
      ativo: Sequelize.STRING,
      situacao: Sequelize.STRING,
      LivroId: {
        type: Sequelize.INTEGER,
        references: {
          model: "livros",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('exemplar');
  }
};
