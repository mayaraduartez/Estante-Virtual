const { DataTypes} = require("sequelize");
const conexao = require("../config/sequelize");

const Exemplar = conexao.define(
    "Exemplar", 
    {
        descricao: {
            type: DataTypes.STRING,
        },
        ativo: {
            type: DataTypes.STRING,
        },
        situacao: {
            type: DataTypes.STRING,
        },
        LivroId: {
            type: DataTypes.INTEGER,
        }
    }
);

module.exports = Exemplar;