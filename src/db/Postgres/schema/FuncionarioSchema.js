const Sequelize = require('sequelize')

const FuncionarioSchema =
{
    name: 'Funcionario',
    schema: {
        IdFuncionario: {
            type: Sequelize.BIGINT,
            reqrequired: true,
            primaryKey: true,
            autoIncrement: true
        },
        IdEstacionamento: {
            type: Sequelize.BIGINT,
            required: true,
            references: {
                model: 'Estacionamento',
                key: 'IdEstacionamento'
            }
        },
        IdPessoa: {
            type: Sequelize.BIGINT,
            required: true,
            references: {
                model: 'Pessoa',
                key: 'IdPessoa'
            }
        },
        Senha: {
            type: Sequelize.STRING,
            required: true,
        }
    },
    options: {
        tableName: 'Funcionario',
        freezeTableName: false,
        timestamps: false
    }
}

module.exports = FuncionarioSchema