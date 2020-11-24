class Airport {
    constructor() {
        this.hanger = [];
    }

    land(plane) {
        this.hanger.push(plane);
    }
} 

module.exports = Airport;