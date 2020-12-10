const sequelizeConnection = require('./SequelizeConnection')

const EstacionamentoSchema = await sequelizeConnection.define('Estacionamento', {
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
})

module.exports = EstacionamentoSchema