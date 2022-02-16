// The function should, when given two arrays, concatenate the arrays together.


function concat (arrayOne, arrayTwo) {
  let finalArray = [];

  for (let i = 0; i < arrayOne.length; i++) {
    finalArray.push(arrayOne[i]);
  }

  for (let j = 0; j < arrayTwo.length; j++) {
    finalArray.push(arrayTwo[j]);
  }

  return finalArray;

}


console.log(concat([ 1, 2, 3 ], [ 4, 5, 6 ]), "=?", [ 1, 2, 3, 4, 5, 6 ]);
console.log(concat([ 0, 3, 1 ], [ 9, 7, 2 ]), "=?", [ 0, 3, 1, 9, 7, 2 ]);
console.log(concat([], [ 9, 7, 2 ]), "=?", [ 9, 7, 2 ]);
console.log(concat([ 5, 10 ], []), "=?", [ 5, 10 ]);