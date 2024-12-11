const { DataTypes} = require("sequelize");
const conexao = require("../config/sequelize");

const Usuario = conexao.define(
    "Usuario", 
    {
        nome: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        data_nascimento: {
            type: DataTypes.DATEONLY,
        },
        cpf: {
            type: DataTypes.STRING,
            unique: true,
        },
        foto: {
            type: DataTypes.STRING,
        },
        telefone: {
            type: DataTypes.STRING,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        senha: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        admin: {
            type: DataTypes.BOOLEAN,
        },
        turma: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        timestamps: false,
        tableName: "usuarios",
      }
);

module.exports = Usuario;