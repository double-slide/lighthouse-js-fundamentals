// create function with one parameter
// checks how many times 100 can fit within parameter number 
// returns number of times

const howManyHundreds = function (num) {
  let count = (num - (num % 100)) / 100;
  return count;
}

console.log(howManyHundreds(1000), "=?", 10);
console.log(howManyHundreds(894), "=?", 8);
console.log(howManyHundreds(520), "=?", 5);
console.log(howManyHundreds(99), "=?", 0);
console.log(howManyHundreds(0), "=?", 0);