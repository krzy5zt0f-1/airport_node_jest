class Plane {
    constructor(capacity = 300) {
        this._capacity = capacity;
    }

    get capacity() {
        return this._capacity;
    }

    isFlying() {
        return true;
    }
}

module.exports = Plane;