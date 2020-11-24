const Weather = require('./weather.js');

describe('Weather', function(){
  var weather = new Weather();

  test('Check that weather class can create isntances', function() {
      expect(weather).toEqual(expect.any(Weather));
  });
  test('Check that weather can be stormy', function() {
    jest.spyOn(global.Math, 'random').mockReturnValue(0.500001);
      expect(weather.isStormy()).toBeTruthy();
  });
  test('Check that weather can be not stormy', function() {
    jest.spyOn(global.Math, 'random').mockReturnValue(0.4999999);
      expect(weather.isStormy()).toBeFalsy();
  });
})
