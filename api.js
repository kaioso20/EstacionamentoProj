const Hapi = require('@hapi/hapi');
const JWT = require('@hapi/jwt');
const Boom = require('boom');

const findRoutes = () => {
    //TODO: Find All routes
}

function main() {
    const app = Hapi.Server({
        host: 'localhost',
        port: 9000
    })

    app.register(JWT)
}
main()