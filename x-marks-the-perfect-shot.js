const moves = ['north', 'north', 'west', 'west', 'north', 'east','north', 'south']  

// function 'finalPosition' takes array 'moves'
// initialize 'finalPosition' array with [0,0] as starting center point
// use for loop based on 'moves' array size to modify 'finalPosition' array
// within switch statement, use x,y coordinates and convert north=y+1, south=y-1, east=x+1, west=x-1
// once for loop is done, 'finalPosition' array is passed as function result 

const finalPosition = function (moves) {
  let finalPosition = [0, 0];
  for (let i = 0; i < moves.length; i++) {
    switch(moves[i]) {
    case "north":
      finalPosition[1]++;
      break;
    case "south":
      finalPosition[1]--;
      break;
    case "east":
      finalPosition[0]++;
      break;
    case "west":
      finalPosition[0]--;
      break;
    }
  }
  return finalPosition;
}

console.log(finalPosition(moves));