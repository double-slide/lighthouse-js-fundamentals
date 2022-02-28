// requirements
// function receives number
// funtion returns multiplication table from 1 to that number

// iaan's master plan
// create nested loops
// within, write product to string
// add spacing & newline characters
// return result string


const multiplicationTable = function(maxValue) {
  let result = "";
  
  for (let i = 1; i <= maxValue; i++) {
    
    if (i > 1) {
      result += "\n";
    }
  
    for (let j = 1; j <= maxValue; j++) {
      result += i*j;
      result += " "
    }
  }
  
  return result;
  
  };
  
  console.log(multiplicationTable(1));
  console.log(multiplicationTable(5));
  console.log(multiplicationTable(10));