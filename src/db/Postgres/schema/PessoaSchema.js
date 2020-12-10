const sequelizeConnection = require('./SequelizeConnection')

const PessoaSchema = await sequelizeConnection.define('Pessoa', {
    IdPessoa: {
        type: Sequelize.INTEGER,
        reqrequired: true,
        primaryKey: true,
        autoIncrement: true
    },
    Nome: {
        type: String,
        required: true
    },
    DataNasc: {
        type: Date,
        required: true
    },
    Email: {
        type: String,
        required: true
    },
    Telefone: {
        type: String,
        required: true
    },
})

module.exports = PessoaSchema