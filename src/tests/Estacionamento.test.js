const { deepStrictEqual, ok } = require('assert')
const ContextStrategy = require('../db/Structure/ContextStrategy')
const PostgresStrategy = require('../db/Postgres/PostgresStrategy')


describe('Teste estacionamento', function () {
    this.timeout(Infinity)
    this.beforeAll(async () => {
       
    })
    // it('Teste de validação com 1 + 1', () => {
    //     const result = 1 + 1
    //     const expected = 2
    //     deepStrictEqual(result, expected)
    // })

    it('Definição de model com sequelize', async () => {
        // const schema = await new PostgresStrategy().defineModule()
        await new PostgresStrategy().defineModule()
        // console.log(schema)
    })
})