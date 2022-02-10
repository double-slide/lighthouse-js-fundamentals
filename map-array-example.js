

var test = [12, 929, 11, 3, 199, 1000, 7, 1, 24, 37, 4,
  19, 300, 3775, 299, 36, 209, 148, 169, 299,
  6, 109, 20, 58, 139, 59, 3, 1, 139
];

// Use map method to create new array
// Only modify elements divisible by 3 --> if so, add 100, else keep as-is
// Print original array
// Print new array

var newTest = test.map(function(element) {
  if (element % 3 === 0) {
    element += 100;
    return element;   
  } else {
    return element;
  }
});

console.log(test);
console.log(newTest);