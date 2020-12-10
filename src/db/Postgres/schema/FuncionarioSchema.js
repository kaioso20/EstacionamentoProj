const sequelizeConnection = require('./SequelizeConnection')

const FuncionarioSchema = await sequelizeConnection.define('Funcionario',{
    IdFuncionario: {
        type: Sequelize.INTEGER,
        reqrequired: true,
        primaryKey: true,
        autoIncrement: true
    },
    IdEstacionamento:{
        type: BigInt,
        required: true,
        references:{
            model: 'Estacionamento',
            key: 'IdEstacionamento' 
        }
    },
    IdPessoa:{
        type: BigInt,
        required: true,
        references:{
            model: 'Pessoa',
            key: 'IdPessoa' 
        }
    },
    Senha:{
        type: String,
        required: true,
    },
})

module.exports = FuncionarioSchema