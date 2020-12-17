const Sequelize = require('sequelize')

const IDb = require('./../Structure/InterfaceDB');
const CarroSchema = require('./../Postgres/schema/CarroSchema')
const ClienteSchema = require('./../Postgres/schema/ClienteSchema')
const EstacionamentoSchema = require('./../Postgres/schema/EstacionamentoSchema')
const FuncionarioSchema = require('./../Postgres/schema/FuncionarioSchema')
const AcessoEstacionamentoSchema = require('./../Postgres/schema/AcessoEstacionamentoSchema')
const PessoaSchema = require('./../Postgres/schema/PessoaSchema');

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
    async defineAllModules() {
        await this._connection.define(PessoaSchema.name, PessoaSchema.schema, PessoaSchema.options).sync()
        await this._connection.define(EstacionamentoSchema.name, EstacionamentoSchema.schema, EstacionamentoSchema.options).sync()
        await this._connection.define(FuncionarioSchema.name, FuncionarioSchema.schema, FuncionarioSchema.options).sync()
        await this._connection.define(ClienteSchema.name, ClienteSchema.schema, ClienteSchema.options).sync()
        await this._connection.define(CarroSchema.name, CarroSchema.schema, CarroSchema.options).sync()
        await this._connection.define(AcessoEstacionamentoSchema.name, AcessoEstacionamentoSchema.schema, AcessoEstacionamentoSchema.options).sync()

        return this._connection;
    }
    read(query) {
        return this._schema.read(query)
    }
    update(id, body) {
        return this._schema.update(id, body)
    }
    create(body) {
        return this._schema.create(body)
    }
    delete(id, query) {
        return this._schema.delete(id, query)
    }
}

module.exports = PostgresStrategy