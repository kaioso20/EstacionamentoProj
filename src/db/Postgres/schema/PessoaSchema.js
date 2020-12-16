const Sequelize = require('sequelize')

const PessoaSchema = {
    name: 'Pessoa',
    schema: {
        IdPessoa: {
            type: Sequelize.INTEGER,
            required: true,
            primaryKey: true,
            autoIncrement: true
        },
        Nome: {
            type: Sequelize.STRING,
            required: true
        },
        DataNasc: {
            type: Sequelize.DATE,
            required: true
        },
        Email: {
            type: Sequelize.STRING,
            required: true
        },
        Telefone: {
            type: Sequelize.STRING,
            required: true
        }
    },
    options:{
        tableName: 'Pessoa',
        freezeTableName: false,
        timestamps: false
    } 
}

module.exports = PessoaSchema