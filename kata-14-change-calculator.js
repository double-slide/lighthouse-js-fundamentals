// requirements
// function takes two values
// first value is total amount for transaction (cents)
// second value is amount given to cashier (cents)
// returns object describing total change



// iaan's master plan
// change = cash - total
// make object array with denominations and values
// use modulus and array object values to check if change is divisible by denom
// add to result object 
// note that same issue as before: can only use bracket notation to push tab/value into object]
// dot notation doesn't work



const calculateChange = function(total, cash) {

  let change = cash - total;
  let changeObject = {};

  let denomArray = [
    {denom: 'twentyDollars', value: 2000},
    {denom: 'tenDollars', value: 1000},
    {denom: 'fiveDollars', value: 500},
    {denom: 'twoDollars', value: 200},
    {denom: 'oneDollars', value: 100},
    {denom: 'quarter', value: 25},
    {denom: 'dime', value: 10},
    {denom: 'nickel', value: 5},
    {denom: 'penny', value: 1},
  ]

  for (let i = 0; i < 9; i++) {
    if (change >= denomArray[i].value) {
      let count = (change - (change % denomArray[i].value)) / denomArray[i].value
      let denomination = denomArray[i].denom;
      changeObject[denomination] = count;
      change -= count * denomArray[i].value;
    }
  }
  return changeObject;
};

console.log(calculateChange(1787, 2000));
console.log("---");
console.log(calculateChange(2623, 4000));
console.log("---");
console.log(calculateChange(501, 1000));