// requirements
// function receives string of words
// return string with all whitespace characters converted to "%20"
// if whitespace on outside of string, only replace whitespace on inside of string



// iaan's master plan
// function receives string 'text'
// initiate oldString = text
// initiate newString = ""
// check for whitespace character at front end and back end of oldString 
  // if (oldString[0] == " ")
    // oldString.splice(0, 1)
  // if (oldString[oldString.length-1] == " ")
    // oldString.splice((oldString.length-1), 1)
// create for loop equal to length of oldString
  // cycle through and use if statement on each character
    // if whitespace, newString.push "%20"
    // if character. newstring.push(character)
  // end for loop
// return newString


const urlEncode = function(text) {
  let newString = "";
  let startIndex = 0;
  let endIndex = text.length; 

  if (text[0] == " ") {
    startIndex += 1;
  }

  if (text[text.length - 1] == " ") {
    endIndex -= 1;
  }

 for (let i = startIndex; i < endIndex; i++) {
   if (text[i] == " ") {
     newString += "%20";
   } else {
     newString += text[i];
   }
 }
 return newString;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));
console.log(urlEncode(" iaan is getting this "));