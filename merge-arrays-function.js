// requirements
// create function called merge
// receives two sorted arrays containing numbers
// returns a sorted array of the numbers from both lists

// assume all positive numbers, lowest is 0
// assume no repeat numbers between arrays

// iaan's master plan
// function receives two sorted arrays
// init new array3
// create for loop, length of array1 + array2
// use two incrementers, one for array1 and one for array2
// use two if statements inside for loop to check each array for lower number
// for lower number, push into array3 and increase incrementer for that array


function merge(array1, array2) {



  let array3 = [];
  let index1 = 0;
  let index2 = 0;

  if (array1.length == 0) {
    array3 = array2;
    return array3;   
  } else if (array2.length == 0) {
    array3 = array1;
    return array3;
  }

  // while ((index1 < array1.length) && (index2 < array2.length)) {
  for (let i = 0; i < array1.length + array2.length; i++) {

    // // Just for troubleshooting:
    // console.log('');
    // console.log('--NEW LOOP--');
    // console.log(array1);
    // console.log(array2);
    // console.log(array3);
    // console.log("array1 value = " + array1[index1]);
    // console.log("array2 value = " + array2[index2]);
    // console.log("array1 length = " + array1.length);
    // console.log("array2 length = " + array2.length);
    // console.log("index1 = " + index1);
    // console.log("index2 = " + index2);

    if (index1 == array1.length || array1[index1] > array2[index2]) {
      array3.push(array2[index2]);
      if (index2 < array2.length) {
        index2++;
      }
    } else if (index2 == array2.length || array1[index1] <= array2[index2]) {
      array3.push(array1[index1]);
      if (index1 < array1.length) {
        index1++;
      }
    }


  }

  return array3;
}

console.log(merge([1,4,6,8], [2,3,7,9]));
console.log(merge([ 4, 5, 6, ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
// console.log(merge([ 4, 5, 6, 7, 9 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6, 7, 9 ]);
console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);