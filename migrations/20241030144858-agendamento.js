'use strict';
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('agendamento', { 
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      data_emprestimo: Sequelize.DATEONLY,
      data_prevista: {
        type: Sequelize.DATEONLY,
        allowNull: false,
      },
      data_devolucao_real: Sequelize.DATEONLY,
      situacao: Sequelize.STRING, 
      observacao: Sequelize.STRING,
      ExemplarId: {
        type: Sequelize.INTEGER,
        references: {
          model: "exemplar",
          key: "id",
        },
      },
      UsuarioId: {
        type: Sequelize.INTEGER,
        references: {
          model: "usuarios",
          key: "id",
        },
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('agendamento');
  }
};