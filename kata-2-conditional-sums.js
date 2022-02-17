// requirements:
// function accepts array of numbers and 'condition' argument
// condition argument specifies "even" or "odd"
// function returns sum of numbers from array that match condition

// iaan's master plan
// function takes array and condition
// initialize variable 'sum' = 0
// create for loop to match array.length & look at each element
  // if "even" && array[i] % 2 === 0
    // sum = sum + array[i]
  // if "odd" && array[i] % 2 !== 0
    // sum = sum + array[i]
  // end for loop
  // return sum


const conditionalSum = function(values, condition) {
  let sum = 0;
  for (let i = 0; i < values.length; i++) {
    if (condition == "even" && values[i] % 2 === 0) {
      sum += values[i];
    } else if (condition == "odd" && values[i] % 2 !== 0) {
      sum += values[i];
    }
  }
return sum;
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));