module.exports = (sequelize, DataTypes) => {
    const Agendamento = sequelize.define('Agendamento', {
      data_emprestimo: DataTypes.DATEONLY,
      data_prevista: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      data_devolucao_real: DataTypes.DATEONLY,
      situacao: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      observacao: DataTypes.STRING,
      ExemplarId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      UsuarioId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    }, {
      tableName: 'agendamento',
      hooks: {
        beforeDestroy: async (agendamento, options) => {
          if (agendamento.situacao !== 'finalizado') {
            throw new Error('O agendamento não pode ser excluído porque ainda está ativo.');
          }
        },
      },
    });
  
    return Agendamento;
  };