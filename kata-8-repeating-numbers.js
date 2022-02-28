// requirements
// create function 
// receives X number of arrays, each with two numbers inside
// first value is number to repeat
// second value is amount of times to repeat it



// iaan's master plan
// init result string
// create for loop based on .length of data (number of arrays)
// if second+ time running loop, push ", "
// inside, create for loop with stop value equal to second array value
// push first value to result string
// function returns result string



const repeatNumbers = function(data) {
  let result = "";
  for (let i = 0; i < data.length; i++) {
    if (i > 0) {
      result += ", ";
    }
    for (let j = 0; j < data[i][1]; j++) {
      result += data[i][0];
    }
  }
  return result;
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));