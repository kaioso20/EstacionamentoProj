const sequelizeConnection = require('./SequelizeConnection')

const ClienteSchema = await sequelizeConnection.define('Cliente', {
    IdClienteSchema: {
        type: Sequelize.INTEGER,
        required: true,
        primaryKey: true,
        autoIncrement: true
    },
    IdFuncionario: {
        type: Sequelize.INTEGER,
        required: true,
        references:{
            model: 'Funcionario',
            key: 'IdFuncionario'
        }
    },
    IdPessoa: {
        type: Sequelize.INTEGER,
        required: true,
        references:{
            model: 'Pessoa',
            key: 'IdPessoa'
        }
    },
})

module.exports = ClienteSchema