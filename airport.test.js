//const { TestScheduler } = require('jest');
const Airport = require('./airport.js');
const jestConfig = require('./jest.config.js');

describe('Airport', function() {

    var airport = new Airport();
    var flyingPlane = {capacity: 300, isFlying(){return true}};
    var groundedPlane = {capacity: 300, isFlying(){return false}};
    var bigPlane = {capacity: 600, isFlying(){return true}};

    test('Check that airport class can create airports', function() {
        expect(airport).toEqual(expect.any(Airport));
    });

    test('cant land a plane that isnt flying', function() {
        airport.land(groundedPlane);
        expect(airport.hanger).toEqual([]);
    });

    test('can land a plane', function() {
        airport.land(flyingPlane);
        expect(airport.hanger).toEqual([flyingPlane]);
    });

    test('can land a plane with less than 300 capacity', function() {
        airport.land(flyingPlane);
        expect(airport.hanger).toEqual([flyingPlane, flyingPlane]);
    });

    test('can\'t land a plane with MORE than 300 capacity', function() {
        var emptyAirport = new Airport();
        emptyAirport.land(bigPlane);
        expect(emptyAirport.hanger).toEqual([]);
    });
})
