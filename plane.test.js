const { testEnvironment } = require('./jest.config.js');
const Plane = require('./plane.js');

describe('Plane', function() {
    var plane = new Plane();

    test('It can create instances', function() {
        expect(plane).toEqual(expect.any(Plane));
    })

    test('has a capacity', function() {
        expect(plane.capacity).toEqual(300);
    })
})