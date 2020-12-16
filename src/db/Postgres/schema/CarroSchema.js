const Sequelize = require('sequelize')

const CarroSchema = {
    name: 'Carro',
    schema: {
        IdCarro: {
            type: Sequelize.INTEGER,
            required: true,
            primaryKey: true,
            autoIncrement: true
        },
        IdCliente: {
            type: Sequelize.INTEGER,
            required: false,
            references: {
                model: 'Cliente',
                key: 'IdCliente'
            }
        },
        Placa: {
            type: Sequelize.STRING,
            required: true
        },
        Modelo: {
            type: Sequelize.STRING,
            required: false,
        },
        Marca: {
            type: Sequelize.STRING,
            required: false,
        },
        Cor: {
            type: Sequelize.STRING,
            required: false,
        }
    },
    options: {
        tableName: 'Carro',
        freezeTableName: false,
        timestamps: false
    }
}
module.exports = CarroSchema