// requirements:

// function carPassing(cars, speed) 
// takes array of car objects, and the speed of a car passing the sensor
// create new object with a property called speed, and another property called time and add it to the cars array
// time property can be retrieved using JS built-in Date.now() function
// function returns array that includes all of the elements in cars as well as new element



//iaan's master plan:

// put simpler: take array of objects like
// cars = [ {time: XYZ, speed: 100}, {time: ...}...]
// create new object using arguments
// add object to array
// return modified array


const carPassing = function (cars, speed) {
  var newMeasurement = {
    time: Date.now(),
    speed: speed
  }
  cars.push(newMeasurement);
  return cars;
}

// input array of existing objects
const cars = [
  {
    time: 1568329654807,
    speed: 40,
  },
  {
    time: 1568329821632,
    speed: 42,
  },
  {
    time: 1568331115463,
    speed: 35
  }
]

// input speed from new measurement
const speed = 38;

// print original cars array 
console.log(cars);

// send cars array to carPassing function & print result
console.log(carPassing(cars, speed));