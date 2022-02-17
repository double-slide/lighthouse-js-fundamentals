// requirements:
// function accepts array of two or more numbers
// function returns sum of two largest numbers from array


// iaan's master plan
// create function with 'data' argument
// let "first" = 0
// let "second" = 0
// for loop (data.length)
  // if data[i] > first && data[i] > second
    // make second = first
    // make first = data[i]
  // else if data[i] < first && data[i] > second
    // make second = data[i]
  // finish for loop, first and second now have highest and 2nd highest values
  // return (first + second)


  const sumLargestNumbers = function(data) {
    let first = 0;
    let second = 0;
    for (let i = 0; i < data.length; i++) {
      if (data[i] > first && data[i] > second) {
        second = first;
        first = data[i];
      } else if (data[i] < first && data[i] > second) {
        second = data[i];
      }
    }
    return(first + second);
  };
  
  console.log(sumLargestNumbers([1, 10]));
  console.log(sumLargestNumbers([1, 2, 3]));
  console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));