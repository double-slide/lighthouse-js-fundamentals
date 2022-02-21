// original code--logs every number between start/finish
// replaces multiples of 3 with 'loopy', multiples of 4 with 'lighthouse' and multiples of 3 and 4 with 'loopyLighthouse'

for (let x = 100; x <= 200; x++) {
  if (x % 3 === 0 && x % 4 !== 0) {
    console.log("Loopy");
  } else if (x % 3 !== 0 && x % 4 === 0) {
    console.log("Lighthouse");
  } else if (x % 3 === 0 && x % 4 === 0) {
    console.log("LoopyLighthouse");
  } else {
    console.log(x);
  }
}


// new challenge--wrap this code into a function called loopyLighthouse(range, multiples, words)
// range is array of numbers representing start/end of the loop
// multiples should be array of 2 numbers 