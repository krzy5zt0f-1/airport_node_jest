const Plane = require('./plane.js');

class Airport {
    constructor() {
        this.hanger = [];
    }

    land(plane) {
        if (plane.capacity < 301 && plane instanceof Plane){
            this.hanger.push(plane);
        }
    }
} 

module.exports = Airport;