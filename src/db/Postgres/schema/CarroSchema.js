const sequelizeConnection = require('./SequelizeConnection')

const CarroSchema = await sequelizeConnection.define('Carro', {
    IdCarro: {
        type: Sequelize.INTEGER,
        reqrequired: true,
        primaryKey: true,
        autoIncrement: true
    },
    IdCliente: {
        type: String,
        required: false,
        references: {
            model: 'Cliente',
            key: 'IdCliente'
        }
    },
    Placa: {
        type: String,
        required: true
    },
    Modelo: {
        type: String,
        required: false,
    },
    Marca: {
        type: String,
        required: false,
    },
    Cor: {
        type: String,
        required: false,
    }
})

module.exports = CarroSchema