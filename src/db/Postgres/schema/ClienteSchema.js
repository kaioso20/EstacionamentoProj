const Sequelize = require('sequelize')

const ClienteSchema = {
    name: 'Estacionamento',
    schema: {
        IdClienteSchema: {
            type: Sequelize.INTEGER,
            required: true,
            primaryKey: true,
            autoIncrement: true
        },
        IdFuncionario: {
            type: Sequelize.INTEGER,
            required: true,
            references: {
                model: 'Funcionario',
                key: 'IdFuncionario'
            }
        },
        IdPessoa: {
            type: Sequelize.INTEGER,
            required: true,
            references: {
                model: 'Pessoa',
                key: 'IdPessoa'
            }
        },
    },
    options: {
        tableName: 'Cliente',
        freezeTableName: false,
        timestamps: false
    }
}

module.exports = ClienteSchema