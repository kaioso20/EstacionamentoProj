const Sequelize = require('sequelize')

const AcessoEstacionamentoSchema = {
    name: 'AcessoEstacionamento',
    schema: {
        IdAcessoEstacionamento: {
            type: Sequelize.INTEGER,
            required: true,
            primaryKey: true,
            autoIncrement: true
        },
        IdEstacionamento: {
            type: Sequelize.INTEGER,
            required: false,
            references: {
                model: 'Estacionamento',
                key: 'IdEstacionamento'
            }
        },
        IdCarro: {
            type: Sequelize.INTEGER,
            required: false,
            references: {
                model: 'Carro',
                key: 'IdCarro'
            }
        },
        IdFuncionario: {
            type: Sequelize.INTEGER,
            required: false,
            references: {
                model: 'Funcionario',
                key: 'IdFuncionario'
            }
        },
        DataAcesso: {
            type: Sequelize.DATE,
            required: true,
            defaultValue: Sequelize.NOW
        },
        ValorCobranca: {
            type: Sequelize.DECIMAL,
            required: true,
        },
        PagamentoComPromocao: {
            type: Sequelize.BOOLEAN,
            required: true,
        },
        Pago: {
            type: Sequelize.BOOLEAN,
            required: true,
        }
    },
    options: {
        tableName: 'AcessoEstacionamento',
        freezeTableName: false,
        timestamps: false
    }
}
module.exports = AcessoEstacionamentoSchema