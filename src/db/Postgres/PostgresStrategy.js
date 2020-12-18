const Sequelize = require('sequelize')

const IDb = require('./../Structure/InterfaceDB');

class PostgresStrategy extends IDb {
    constructor(schema, connection) {
        super()
        this._schema = schema,
        this._connection = connection
    }
    static connect() {
        //const connectionString = process.env.CONNECTION_STRING_POSTGRES

        return new Sequelize('postgres://local:123456@localhost:5432/estacionamento')
    }
    isConnected() {
        return this._db.isConnected()
    }
    async defineModule(name, schema, options) {
        const model = await this._connection.define(name, schema, options).sync()

        return model;
    }
    read(schema, query) {
        return schema.read(query)
    }
    update(schema, id, body) {
        return schema.update(id, body)
    }
    create(schema, body) {
        console.log(schema)
        return schema.create(body)
    }
    delete(schema, id, query) {
        return schema.delete(id, query)
    }
}

module.exports = PostgresStrategy