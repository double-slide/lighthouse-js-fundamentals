const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];



// function will receive array of stations, each station an array with name, cap, venue type
// use for loop on array 'stations'
// within that, check each station using conditionals 
// checks i=2 for >=50 and i=3 for "school" or "community center"
// if meet criteria, add array element i=0 to the end of return array (list of acceptable places)
// once for loop is done, resulting array is returned

const chooseStations = function(stations) {
  // initialize votingStations array for results 
  let votingStations = [];
  
  // use for loop on array 'stations'
  for (let i = 0; i < stations.length; i++) {
    
    // check first array element for conditionals
    if (stations[i][1] >= 20 && (stations[i][2] == "school" || stations[i][2] == "community centre")) {
      
      // if meet criteria, add location name to resulting array
      votingStations.push(stations[i][0]);
    }
  }

  // once loop is done, return resulting array
  return votingStations;

}

console.log(chooseStations(stations));