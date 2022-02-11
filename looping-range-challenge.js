// function takes 3 integer parameters (start, end, step)
// function returns an array of numbers from start to end (inclusive) in increments of step
// for this challenge, ignore special case where either start/end is different (even/odd) from step


// iaan's master plan:
// create function with 3 parameters
// inside function, initialize empty array outputList
// use if statements to check for bad input, such as start/end/step undefined, or start>end, or step=0 or negative
// for bad input above, return empty array
// if no bad input:
// use for loop with start/end/step to append elements to array to create list 
// return array of numbers



function range(start, end, step) {
  let outputList = [];

  if (start == undefined || end == undefined || step == undefined) {
    return outputList;

  } else if (start >= end) {
    return outputList;

  } else if (step <= 0) {
    return outputList;

  } else {
    let num = start;
    for (let i = 0; i <= ((end - start) / step); i++) {
      outputList[i] = num;
      num += step;
    }
    return outputList;

  }
}

// paste after code to verify working correctly
console.log(range(0, 10, 2));
console.log("----------");
console.log(range(10, 30, 5));
console.log("----------");
console.log(range(-5, 2, 3));
console.log("----------");
console.log(range(5, 2, 3));
console.log("----------");
console.log(range(1, 10, 0));