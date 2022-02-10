// define function 'ageCalculator' that takes three parameters:
// name (str), yearOfBirth (num), currentYear (num)
// example input 'ageCalculator("Suzie", 1983, 2015)
// return string "Suzie is 32 years old."


const ageCalculator = function (name, yearOfBirth, currentYear) {
  let age = currentYear - yearOfBirth;
  let ageStatement = name + " is " + age + " years old."
  return ageStatement;
}

console.log(ageCalculator("Miranda", 1983, 2015));
console.log(ageCalculator("Ferdinand", 1988, 2015));