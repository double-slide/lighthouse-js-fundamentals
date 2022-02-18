// requirements:
// function receives array of instructor objects
// function returns object with longest 'name' property
// if two have same length, return first one


// iaan's master plan
// function receives array of instructor objects
// let keepTrack = {position: 0, count: 0}
// for loop -- length of array
// if instructors[i][name].length > keepTrack.count
  // make keepTrack.position = i
  // make keepTrack.count = instructors[i][name].length
// end for loop
// return instructors[keepTrack.position]


const instructorWithLongestName = function(instructors) {
  let keepTrack = {
    position: 0,
    count: 0
  }
  for (let i = 0; i < instructors.length; i++) {
    if (instructors[i].name.length > keepTrack.count) {
      keepTrack.position = i;
      keepTrack.count = instructors[i].name.length;
    }
  }
  return instructors[keepTrack.position];
};

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));

console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));