const Sequelize = require('sequelize')

const IDb = require('./../Structure/InterfaceDB');
const CarroSchema = require('./../Postgres/schema/CarroSchema')
const ClienteSchema = require('./../Postgres/schema/ClienteSchema')
const EstacionamentoSchema = require('./../Postgres/schema/EstacionamentoSchema')
const FuncionarioSchema = require('./../Postgres/schema/FuncionarioSchema')
const AcessoEstacionamentoSchema = require('./../Postgres/schema/AcessoEstacionamentoSchema')
const PessoaSchema = require('./../Postgres/schema/PessoaSchema')

class PostgresStrategy extends IDb {
    constructor(schema) {
        super()
        this._schema = schema
    }
    static connect() {
        return this._db.connect()
    }
    isConnected() {
        return this._db.isConnected()
    }
    async defineModule() {
        const connectionString = process.env.CONNECTION_STRING_POSTGRES
        console.log(connectionString)
        const Sequelizer = new Sequelize('postgres://local:123456@localhost:5432/estacionamento')
        Sequelizer.define(EstacionamentoSchema.name, EstacionamentoSchema.schema, EstacionamentoSchema.options).sync()
        Sequelizer.define(PessoaSchema.name, PessoaSchema.schema, PessoaSchema.options).sync()
        Sequelizer.define(FuncionarioSchema.name, FuncionarioSchema.schema, FuncionarioSchema.options).sync()
        Sequelizer.define(ClienteSchema.name, ClienteSchema.schema, ClienteSchema.options).sync()
        Sequelizer.define(CarroSchema.name, CarroSchema.schema, CarroSchema.options).sync()
        Sequelizer.define(AcessoEstacionamentoSchema.name, AcessoEstacionamentoSchema.schema, AcessoEstacionamentoSchema.options).sync()
        return Sequelizer;
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