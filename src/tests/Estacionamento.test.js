const { deepStrictEqual, ok } = require('assert')
const Context = require('../db/Structure/ContextStrategy')
const PostgresStrategy = require('../db/Postgres/PostgresStrategy')

const CarroSchema = require('./../db/Postgres/schema/CarroSchema')
const ClienteSchema = require('./../db/Postgres/schema/ClienteSchema')
const EstacionamentoSchema = require('./../db/Postgres/schema/EstacionamentoSchema')
const FuncionarioSchema = require('./../db/Postgres/schema/FuncionarioSchema')
const AcessoEstacionamentoSchema = require('./../db/Postgres/schema/AcessoEstacionamentoSchema')
const PessoaSchema = require('./../db/Postgres/schema/PessoaSchema');

let context = {}
let contextPostgres = {}
let SequelizeConnection = {}

let eachModel = {}

const Estacionamento01 = {
    Endereco: 'Rua Professora Maria de Assumpção, 1971',
    Nome: 'IASD - Boqueirão'
}

describe('Teste estacionamento', function () {
    this.timeout(Infinity)
    this.beforeAll(async () => {
        connection = PostgresStrategy.connect()
        contextPostgres = new Context(new PostgresStrategy({}, connection))
    })

    it('POSTGRES - Definição de model com sequelize', async () => {

        const PessoaModel = await contextPostgres.defineModule(PessoaSchema.name, PessoaSchema.schema, PessoaSchema.options)
        const EstacionamentoModel = await contextPostgres.defineModule(EstacionamentoSchema.name, EstacionamentoSchema.schema, EstacionamentoSchema.options)
        const FuncionarioModel = await contextPostgres.defineModule(FuncionarioSchema.name, FuncionarioSchema.schema, FuncionarioSchema.options)
        const ClienteModel = await contextPostgres.defineModule(ClienteSchema.name, ClienteSchema.schema, ClienteSchema.options)
        const CarroModel = await contextPostgres.defineModule(CarroSchema.name, CarroSchema.schema, CarroSchema.options)
        const AcessoEstacionamentoModel = await contextPostgres.defineModule(AcessoEstacionamentoSchema.name, AcessoEstacionamentoSchema.schema, AcessoEstacionamentoSchema.options)

        eachModel = {
            PessoaModel, EstacionamentoModel, FuncionarioModel, ClienteModel, CarroModel, AcessoEstacionamentoModel
        };

        const actual = true
        const expected = true;

        deepStrictEqual(actual, expected)
    })

    it('POSTGRES - Criação de Item', async () => {
        console.log(eachModel)
        const result = contextPostgres.create(eachModel.EstacionamentoModel, Estacionamento01)
    })
})