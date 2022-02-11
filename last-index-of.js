// Requirements:
// Function that determines the last index of an item in an array
// When function given an array and a value, return index of the last time the value occurs in the array
// If the value never occurs, the function returns -1

// Iaan's master plan:
// create function with parameters 'array' and 'findLast'
// initialize lastIndex = -1
// use for loop (with index i) to examine each array element
// if element = findLast, set lastIndex to i
// once loop is complete, return findLast


function lastIndexOf (inputArray, findLast) {
  let lastIndex = -1;
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i] === findLast) {
      lastIndex = i;
    }
  }
  return lastIndex;
}


console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);