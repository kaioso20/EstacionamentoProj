const InterfaceDB = require('./InterfaceDB')

class ContextStrategy extends InterfaceDB {
    constructor(db) {
        super()
        this._db = db
    }
    static connect() {
        return this._db.connect()
    }
    isConnected() {
        return this._db.isConnected()
    }
    async defineModule(name, schema, options) {
        return await this._db.defineModule(name, schema, options)
    }
    read(schema, query) {
        return this._db.read(schema, query)
    }
    update(schema, id, body) {
        return this._db.update(schema, id, body)
    }
    create(schema, body) {
        return this._db.create(schema, body)
    }
    delete(schema, id, query) {
        return this._db.delete(schema, id, query)
    }
}

module.exports = ContextStrategy