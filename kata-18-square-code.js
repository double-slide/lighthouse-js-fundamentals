// requirements
// create function for square code algorithm
// input is string with spaces
// output is coded string 

// iaan's master plan
// create new string with spaces removed
// measure string length
// measure square root of length and round up
// use nested for loop to circulate through
// owing to sqrt & rounding, last scrambled row could have fewer characters
// use 'index' variable to pull characters, with if statement that loops it back 
// above plan didn't work great; changed course to use nested arrays for better visual representation



const squareCode = function(message) {

  let spaceLessMessage = "";
  let codedMessage = "";
  let indexCounter = 0;

  console.log("input message: " + message);

  for (let i = 0; i < message.length; i++) {
    if (message[i] == " ") {
      // do nothing
    } else {
      spaceLessMessage += message[i];
    }
  }

  let lengthCount = spaceLessMessage.length;
  let rowCount = Math.ceil(Math.sqrt(lengthCount));
  let wordLetterCount = Math.ceil(lengthCount / rowCount);
  let squareArray = new Array(rowCount);

  for (let a = 0; a < squareArray.length; a++) {
    squareArray[a] = new Array(wordLetterCount);
  }

  let indexInMessage = 0;

  for (let x = 0; x < wordLetterCount; x ++) {
    for (let y = 0; y < rowCount; y++) {
      // console.log(spaceLessMessage[indexInMessage]);
      squareArray[y][x] = spaceLessMessage[indexInMessage];
      indexInMessage++; 
    }
  }

  // console.log(squareArray); // can use this to print as 'square' if desired


  for (let i = 0; i < rowCount; i++) {
    for (let j = 0; j < wordLetterCount; j++) {
      if (squareArray[i][j] != undefined) {
        codedMessage += squareArray[i][j];
      } else {
        // do nothing
      }
    }
    codedMessage += " ";
  }

  return "coded output message: " + codedMessage;

};

console.log(squareCode("chill out"));
console.log("\n---------\n");
console.log(squareCode("feed the dog"));
console.log("\n---------\n");
console.log(squareCode("have a nice day"));
console.log("\n---------\n");
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));