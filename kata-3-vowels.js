// requirements
// function accepts string
// function returns count of vowels (a,e,i,o,u) from string

// iaan's master plan
// function takes string 'data'
// let counter = 0
// for data.length:
  // if data[i] == a || e || i etc
    // counter++
// end for loop
// return counter

const numberOfVowels = function(data) {
let counter=0;
for (let i = 0; i < data.length; i++) {
  if (data[i] == "a" || data[i] == "e" || data[i] == "i" || data[i] == "o" || data[i] == "u") {
    counter++;
  }
}
return counter;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));