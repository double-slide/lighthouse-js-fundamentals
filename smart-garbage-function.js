// Welcome back to Codeville, where you are now the mayor! 
// The people of Codeville want you to focus on Smart City upgrades.
// You've decided to begin by replacing all of the city's trash cans with smart cans:
// automatically sorts items into waste, recycling, and compost bins.

// We need to complete a function called smartGarbage(trash, bins)
// responsible for increasing the garbage count for waste, recycling, or compost
// depending on what trash is submitted.


// Our function will receive two arguments:

// The first argument, trash, is a string that will tell our function what type of item is being submitted.

// The second argument, bins, is an object containing three properties (waste, recycling, and compost)
// which hold some numerical value.
// Our function must increase the correct value in the bins object, and then return the newly updated object.


//iaan's master plan
// create function smartGarbage with arguments trash and bins
// trash = string to say what type of item being submitted
// bins = object containing 3 properties (waste, recycling, compost) with quantities of each

// use switch statement to check trash against keys
// if matches, increment that keys quantity (modify object) & return out of switch
// after switch statement, return object with new quantities

const smartGarbage = function (trash, bins) {
  let binsReturn = bins;

  switch(trash) {
    case "waste":
      // console.log(binsReturn);
      binsReturn.waste++;
      // console.log(binsReturn);
      break;
    case "recycling":
      binsReturn.recycling++;   
      break;
    case "compost":
      binsReturn.compost++;
      break;
    default:
      return binsReturn;
  }

  return binsReturn;

}

console.log(smartGarbage("compost", { waste: 4, recycling: 2, compost: 5 }));