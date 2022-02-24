// original code--logs every number between start/finish
// replaces multiples of 3 with 'loopy', multiples of 4 with 'lighthouse' and multiples of 3 and 4 with 'loopyLighthouse'



// new challenge--wrap this code into a function called loopyLighthouse(range, multiples, words)
// range is array of numbers representing start/end of the loop
// multiples should be array of 2 numbers 

function loopyLighthouse(range, multiples, words) {

  for (let x = range[0]; x <= range[1]; x++) {
    if (x % multiples[0] === 0 && x % multiples[1] !== 0) {
      console.log(words[0]);
    } else if (x % multiples[0] !== 0 && x % multiples[1] === 0) {
      console.log(words[1]);
    } else if (x % multiples[0] === 0 && x % multiples[1] === 0) {
      console.log(words[0] + words[1]);
    } else {
      console.log(x);
    }
  }
  return;
}

console.log(loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]));