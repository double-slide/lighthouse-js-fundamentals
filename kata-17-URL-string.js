// requirements 
// function receives URL encoded string
// returns javascript object that represents that data


// iaan's master plan
// make function first handle single key-value conversion
// then add loop to check for "%" and break string into lengths
// note: URL encoded space "%20" replacement is only for value, not key
// key on input string must be single word 
// 


const urlDecode = function(text) {

  let result = {};
  let pairsArray = []; // holds string indexes for "&" locations within text
  let startIndex = 0;
  let endIndex = 0;
  let multiFlag = false; // conditional based on if multiple or single key-value pair

  for (let j = 0; j < text.length; j++) {
    if (text[j] == "&") {
      pairsArray.push(j);
      multiFlag = true;
    }
  }

  if (multiFlag == true) {
    for (let k = 0; k <= pairsArray.length; k++) {

      if (k == 0) {
        startIndex = 0;
        endIndex = pairsArray[k];
      } else if (k < pairsArray.length) {
        startIndex = pairsArray[k-1] + 1;
        endIndex = pairsArray[k];
      } else if (k == pairsArray.length) {
        startIndex = pairsArray[k-1] + 1;
        endIndex = text.length;
      }

      let keyFlag = 1;
      let key = "";
      let value = "";

      // loop to pull key characters out
      for (i = startIndex; i < endIndex; i++) {
        
        if (text[i] == "=") {
          keyFlag = 0;
        }

        if (keyFlag == 1 && text[i] != "=") {
          key += text[i];          
        }
        
        if (keyFlag == 0 && text[i] != "=") {
          
          // add space character decode conditional here
          if (text[i] == "%" && text[i+1] == "2" && text[i+2] == "0") {
            value += " ";
          } else if (text[i-1] == "%" && text[i] == "2" && text[i+1] == "0") {
            // do nothing
          } else if (text[i-2] == "%" && text[i-1] == "2" && text[i] == "0") {
            // do nothing
          } else {
            value += text[i];
          }
        }

      }
      result[key] = value;
    }  
  } else if (multiFlag == false) {

    let keyFlag = 1;
    let key = "";
    let value = "";

    // loop to pull key characters out
    for (i = 0; i < text.length; i++) {
      
      if (text[i] == "=") {
        keyFlag = 0;
      }

      if (keyFlag == 1 && text[i] != "=") {
       key += text[i];              
      }
      
      if (keyFlag == 0 && text[i] != "=") {
        
        // add space character decode conditional here
        if (text[i] == "%" && text[i+1] == "2" && text[i+2] == "0") {
          value += " ";
        } else if (text[i-1] == "%" && text[i] == "2" && text[i+1] == "0") {
          // do nothing
        } else if (text[i-2] == "%" && text[i-1] == "2" && text[i] == "0") {
          // do nothing
        } else {
          value += text[i];
        }
        
      }

    }
    result[key] = value;
  }
  return result;
};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);
console.log(urlDecode("Name=Iaan%20Johnston&Bikes=One&Dog=Ramses&Cabin=Apex%20Mountain&Home=Berkeley&Dad=Drew%20Johnston&Hobby=Ski%20Touring"));