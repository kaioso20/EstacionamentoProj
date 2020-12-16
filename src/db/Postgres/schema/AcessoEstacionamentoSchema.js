const Sequelize = require('sequelize')

const AcessoEstacionamentoSchema = {
    name: 'AcessoEstacionamento',
    schama: {
        IdAcessoEstacionamento: {
            type: Sequelize.BIGINT,
            reqrequired: true,
            primaryKey: true,
            autoIncrement: true
        },
        IdEstacionamento: {
            type: Sequelize.BIGINT,
            required: false,
            references: {
                model: 'Estacionamento',
                key: 'IdEstacionamento'
            }
        },
        IdCarro: {
            type: Sequelize.BIGINT,
            required: false,
            references: {
                model: 'Carro',
                key: 'IdCarro'
            }
        },
        IdFuncionario: {
            type: Sequelize.BIGINT,
            required: false,
            references: {
                model: 'Carro',
                key: 'IdCarro'
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