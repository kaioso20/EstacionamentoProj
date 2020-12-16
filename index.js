const ContextStrategy = require('./src/db/Structure/ContextStrategy')
const { join } = require('path')

const env = process.env.NODE_ENV || 'dev'
ok(env === 'dev' || env === 'prod', 'O ENV é inválido!!')
console.log(env)

const configPath = join(__dirname , './config', `.env.${env}`)

config({
    path: configPath
})

if (1 === 1) {
    const obj = [{
        nome: 'caio'
    }, {
        nome: 'ana'
    }, {
        nome: 'marcos'
    }]
    obj.map(eachObj => `Bom dia: ${eachObj.nome}`)
} 