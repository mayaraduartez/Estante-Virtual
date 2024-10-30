'use strict';
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('livros', { 
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      titulo: Sequelize.STRING,
      autor: Sequelize.STRING,
      resumo: Sequelize.STRING,
      paginas: Sequelize.INTEGER,
      catalogacao: Sequelize.STRING,
     });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('livros');
  }
};
