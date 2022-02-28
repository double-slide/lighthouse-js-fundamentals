// requirements
// function receives normal string of words separated with spaces
// convert and return this string in camel case

// iaan's master plan
// I think this can be done just using a loop and if statement
// if statement only checks if character N is preceded by " "
// if no, add to string
// if yes, add uppercase to string 
// use string.toUpperCase() method for this
// use startFlag as condition to make sure weird spaces like "__this" don't capitalize the first word


const camelCase = function(input) {

if (input.length = 0) {
  return false;
}

let result = "";
let startFlag = 0;

for (let i = 0; i < input.length; i++) {
  if (input[i] == " ") {
    // do nothing
  } else if (input[i-1] == " " && input[i] != " " && startFlag == 1) {
    result += input[i].toUpperCase();
  } else {
    result += input[i];
    startFlag = 1;
  }
}
return result;
};


console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));
console.log(camelCase("this is a test string that Iaan made"));
console.log(camelCase(" this string has  weird spaces "));




