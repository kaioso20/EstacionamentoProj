const Sequelize = require('sequelize')

const EstacionamentoSchema = {
    name: 'Estacionamento',
    schema: {
        IdEstacionamento: {
            type: Sequelize.INTEGER,
            required: true,
            primaryKey: true,
            autoIncrement: true
        },
        Endereco: {
            type: Sequelize.STRING,
            required: true
        },
        Nome: {
            type: Sequelize.STRING,
            required: true
        }
    },
    options: {
        tableName: 'Estacionamento',
        freezeTableName: false,
        timestamps: false
    }
}

module.exports = EstacionamentoSchema