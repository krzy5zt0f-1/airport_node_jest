//const { TestScheduler } = require('jest');
const Airport = require('./airport.js');

describe('Airport', function() {

    var airport = new Airport();
    var plane;

    test('Check that airport class can create airports', function() {
        expect(airport).toEqual(expect.any(Airport));
    });

    test('can land a plane', function() {
        airport.land(plane);
        expect(airport.hanger).toEqual([plane]);
    });
})
