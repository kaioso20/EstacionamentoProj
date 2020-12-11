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
    async defineModule() {
       return await this._db.defineModule()
    }
    read(query) {
        return this._db.read(query)
    }
    update(id, body) {
        return this._db.update(id, body)
    }
    create(body) {
        return this._db.create(body)
    }
    delete(id, query) {
        return this._db.delete(id, query)
    }

}

module.exports = ContextStrategy