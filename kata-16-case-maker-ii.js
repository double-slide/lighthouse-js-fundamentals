// iaan's master plan
// create separate functions for each case change
// within function makeCase, check if 'casing' parameter is string or array
// if string, just use switch statement to call single casing function
// return new string
// or if casing parameter is array, use if statements and loops to call casing functions in correct order
// each casing function includes error checking for " " at beginning of string, and removes if so



const makeCase = function(input, casing) {

  if (input.length == 0 || casing.length == 0) {
    return false;
  }
  
  let result = "";

  if (Array.isArray(casing) == true) {
      
    casingArray1 = ["camel", "pascal", "snake", "kebab", "title"];
    casingArray2 = ["vowel", "consonant"];
    casingArray3 = ["upper", "lower"];

    for (let i = 0; i < casing.length; i++) {
      for (let j = 0; j < casingArray1.length; j ++) {
        if (casing[i] == casingArray1[j]) {
          switch (casing[i]) {
            case "camel":
              result = camel(input);
              break;
            case "pascal":
              result  = pascal(input);
              break;  
            case "snake":
              console.log("----");
              result  = snake(input);
              break;          
            case "kebab":
              result  = kebab(input);
              break;  
            case "title":
              result  = title(input);
              break;  
          }
        }
      }
    }

    for (let i = 0; i < casing.length; i++) {
      for (let j = 0; j < casingArray2.length; j ++) {
        if (casing[i] == casingArray2[j]) {

          switch (casing[i]) {
            case "vowel":
              result = vowel(result);
              break;  
            case "consonant":
              result = consonant(result);
          }
        }
      }
    }


    for (let i = 0; i < casing.length; i++) {
      for (let j = 0; j < casingArray3.length; j ++) {
        if (casing[i] == casingArray3[j]) {

          switch (casing[i]) {
            case "upper":
              result = upper(result);
              break;
            case "lower":
              result = lower(result);
              break;
            }
        }
      }
    }

    return result;

  } else if (typeof casing === 'string') {
    switch (casing) {
      case "camel":
        result = camel(input);
        break;
      case "pascal":
        result = pascal(input);
        break;
      case "snake":
        result = snake(input);
        break;
      case "kebab":
        result = kebab(input);
        break;
      case "title":
        result = title(input);
        break;
      case "vowel":
        result = vowel(input);
        break;
      case "consonant":
        result = consonant(input);
        break;
      case "upper":
        result = upper(input);
        break;
      case "lower":
        result = lower(input);
        break;
    }

    return result;

  }
}

const camel = function(input) {
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
}

const pascal = function(input) {
  let result = "";
  let startFlag = 0;
  for (let i = 0; i < input.length; i++) {
    if (input[i] != " " && startFlag == 0) {
      result += input[i].toUpperCase();
      startFlag = 1;
    } else if (input[i] == " ") {
      // do nothing
    } else if (input[i-1] == " " && input[i] != " ") {
      result += input[i].toUpperCase();
    } else {
      result += input[i];
    }
  }
  return result;
}

const snake = function(input) {
  let result = "";
  let startFlag = 0;
  for (let i = 0; i < input.length; i++) {
    if (input[i] == " " && startFlag == 0) {
      // do nothing
    } else if (input[i] == " " && startFlag == 1) {
      result += "_";
    } else {
      result += input[i];
      startFlag=1;
    }
  }
  return result;
}

const kebab = function(input) {
  let result = "";
  let startFlag = 0;
  for (let i = 0; i < input.length; i++) {
    if (input[i] == " " && startFlag == 0) {
      // do nothing
    } else if (input[i] == " " && startFlag == 1) {
      result += "-";
    } else {
      result += input[i];
      startFlag=1;
    }
  }
  return result;
}

const title = function(input) {
  let result = "";
  let startFlag = 0;
  for (let i = 0; i < input.length; i++) {
    if (input[i] != " " && startFlag == 0) {
      result += input[i].toUpperCase();
      startFlag = 1;
    } else if (input[i] == " " && startFlag == 0) {
      // do nothing
    } else if (input[i-1] == " " && input[i] != " ") {
      result += input[i].toUpperCase();
      startFlag = 1;
    } else {
      result += input[i];
    }
  }
  return result;
}

const vowel = function(input) {
  let result = "";
  let startFlag = 0;
  for (let i = 0; i < input.length; i++) {
    if (input[i] == " " && startFlag == 0) {
      // do nothing
    } else if (input[i] == "a" || input[i] == "e" || input[i] == "i" || input[i] == "o" || input[i] == "u" || input[i] == "y") {
      result += input[i].toUpperCase();
      startFlag = 1;
    } else {
      result += input[i];
      startFlag = 1;
    }
  }
  return result;
}

const consonant = function(input) {
  let result = "";
  let startFlag = 0;
  for (let i = 0; i < input.length; i++) {
    if (input[i] == " " && startFlag == 0) {
      // do nothing
    } else if (input[i] == "a" || input[i] == "e" || input[i] == "i" || input[i] == "o" || input[i] == "u" || input[i] == "y") {
      result += input[i];
      startFlag = 1;
    } else {
      result += input[i].toUpperCase();
      startFlag = 1;
    }
  }
  return result;
}

const upper = function(input) {
  let result = "";
  let startFlag = 0;
  for (let i = 0; i < input.length; i++) {
    if (input[i] == " ") {
      // do nothing
    } else if (input[i] != " ") {
      result += input[i].toUpperCase();
    }
  }
  return result;
}

const lower = function(input) {
  let result = "";
  let startFlag = 0;
  for (let i = 0; i < input.length; i++) {
    if (input[i] == " ") {
      // do nothing
    } else if (input[i] != " ") {
      result += input[i].toLowerCase();
    }
  }
  return result;
}


console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));




// Expected output:
// thisIsAString
// ThisIsAString
// this_is_a_string
// this-is-a-string
// This Is A String
// thIs Is A strIng
// THiS iS a STRiNG
// THIS_IS_A_STRING