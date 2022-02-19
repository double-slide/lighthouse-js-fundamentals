// requirements
// function receives array of arrays, and vehicle type
// S = small, R = regular, M = motorcycle
// regular can only go in R
// small can go in regular or small
// motorcycle can go in regular, small or motorcycle
// uppercase letter means spot is available
// lowercase letter means spot is unavailable
// function returns either
  // spot X,Y for vehicle if something available
  // 'false' if no spot available


// iaan's master plan
// function receives spots array and vehicle string
// use switch statement depending on vehicle string regular, small, motocycle
// within switch cases, use nested for loops to check each element for compatible spots
// if spot matches, return X,Y of
// if no spot matches, return false 


const whereCanIPark = function (spots, vehicle) {
  
  let parkHere = [0, 0];

  switch(vehicle) {
    case "regular":
      for (let y = 0; y < spots.length; y++) {
        for (let x = 0; x < spots[0].length; x++) {
          if (spots[y][x] === "R") {
            parkHere[0] = x;
            parkHere[1] = y;
            return  parkHere;
          }
        }
      }
      return false;
    break;
    case "small":
      for (let y = 0; y < spots.length; y++) {
        for (let x = 0; x < spots[0].length; x++) {
          if (spots[y][x] === "R" || spots[y][x] === "S") {
            parkHere[0] = x;
            parkHere[1] = y;
            return  parkHere;
          }
        }
      }
      return false;
    break;
    case "motorcycle":
      for (let y = 0; y < spots.length; y++) {
        for (let x = 0; x < spots[0].length; x++) {
          if (spots[y][x] === "R" || spots[y][x] === "S" || spots[y][x] === "M") {
            parkHere[0] = x;
            parkHere[1] = y;
            return  parkHere;
          }
        }
      }
      return false;
    break;
    default:
      return false;
  }

};

console.log(whereCanIPark(
  [
    // COLUMNS ARE X
    // 0    1    2    3    4    5
    ['s', 's', 's', 'S', 'R', 'M'], // 0 ROWS ARE Y
    ['s', 'M', 's', 'S', 'r', 'M'], // 1
    ['s', 'M', 's', 'S', 'r', 'm'], // 2
    ['S', 'r', 's', 'm', 'r', 'M'], // 3
    ['S', 'r', 's', 'm', 'r', 'M'], // 4
    ['S', 'r', 'S', 'M', 'M', 'S']  // 5
  ],
  'regular'
));

console.log(whereCanIPark(
  [
    ['M', 'M', 'M', 'M'],
    ['M', 's', 'M', 'M'],
    ['M', 'M', 'M', 'M'],
    ['M', 'M', 'r', 'M']
  ],
  'small'
));

console.log(whereCanIPark(
  [
    ['s', 's', 's', 's', 's', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['S', 'r', 's', 'm', 'r', 's'],
    ['S', 'r', 's', 'm', 'R', 's'],
    ['S', 'r', 'S', 'M', 'm', 'S']
  ],
  'motorcycle'
))