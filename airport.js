const Plane = require('./plane.js');

class Airport {
    constructor() {
        this.hanger = [];
    }

    land(plane) {
        if (plane.capacity < 301 && plane.isFlying()){
            this.hanger.push(plane);
        }
    }
} 

module.exports = Airport;