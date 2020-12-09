class PostgresStrategy {
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