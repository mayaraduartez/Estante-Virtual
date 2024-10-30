const { DataTypes} = require("sequelize");
const conexao = require("../config/sequelize");

const Livro = conexao.define(
    "Livro", 
    {
        titulo: {
            type: DataTypes.STRING,
        },
        autor: {
            type: DataTypes.STRING,
        },
        resumo: {
            type: DataTypes.STRING,
        },
        paginas: {
            type: DataTypes.INTEGER,
        },
        catalogacao: {
            type: DataTypes.STRING,
        }
    }
);

module.exports = Livro;