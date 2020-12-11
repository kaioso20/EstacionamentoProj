
const Boom = require('boom')

class InterfaceDB{
    connect(){
        return Boom.notImplemented()
    }
    isConnected(){
        return Boom.notImplemented()
    }
    static async defineModule(){
        return Boom.notImplemented()
    }
    read(){
        return Boom.notImplemented()
    }
    update(){
        return Boom.notImplemented()
    }
    create(){
        return Boom.notImplemented()
    }
    delete(){
        return Boom.notImplemented()
    }
}

module.exports = InterfaceDB