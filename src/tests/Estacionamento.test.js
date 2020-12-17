const { deepStrictEqual, ok } = require('assert')
const Context = require('../db/Structure/ContextStrategy')
const PostgresStrategy = require('../db/Postgres/PostgresStrategy')

let context = {}
let connection = {}

describe('Teste estacionamento', function () {
    this.timeout(Infinity)
    this.beforeAll( () => {
        connection = PostgresStrategy.connect()
        context = new Context(new PostgresStrategy({},connection))
    })

    it('Definição de model com sequelize', async () => {
        const SequelizeInfos = await context.defineAllModules(connection)

        const actual = SequelizeInfos.options.dialect === 'postgres'
        const expected = true;

        deepStrictEqual(actual, expected)
    })
})