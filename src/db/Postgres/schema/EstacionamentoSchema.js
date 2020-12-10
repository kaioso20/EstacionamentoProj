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
            type: String,
            required: true
        },
        Nome: {
            type: String,
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