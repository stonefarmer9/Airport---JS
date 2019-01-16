const Airport = require('./airport')
const Plane = require('./plane')

airport = new Airport('Bristol')
plane = new Plane('Boeing 747')


test('the airport lands a plane', () => {
  expect(airport.land(plane)).toBe(plane);
});

test('the airport allows a plane to take off', () =>{
  airport.land(plane)
  expect(airport.takeOff()).toBe(0);
});

test('the airport has a default capacity of 1 when constructed', () => {
  bath = new Airport('Bath')
  expect(bath.capacity).toBe(1)
})
