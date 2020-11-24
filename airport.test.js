//const { TestScheduler } = require('jest');
const Airport = require('./airport.js');
const jestConfig = require('./jest.config.js');
const Plane = require('./plane.js');

describe('Airport', function() {

    var airport = new Airport();
    var plane = new Plane();
    // jest.spyOn(Plane, 'capacity')

    test('Check that airport class can create airports', function() {
        expect(airport).toEqual(expect.any(Airport));
    });

    test('can land a plane', function() {
        airport.land(plane);
        expect(airport.hanger).toEqual([plane]);
    });

    test('can land a plane with less than 300 capacity', function() {
        airport.land(plane);
        expect(airport.hanger).toEqual([plane, plane]);
    });

    test('can\'t land a plane with MORE than 300 capacity', function() {
        var emptyAirport = new Airport();
        var bigPlane = new Plane(600);
        emptyAirport.land(bigPlane);
        expect(emptyAirport.hanger).toEqual([]);
    });
})
