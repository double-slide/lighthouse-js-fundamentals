// requirements:
// create judgeVegetable() function to decide which vegetable is best based on judging characteristic
// function receives two parameters
// list of veggies (array of objects)
// characteristic to judge the veggies by
// function returns name of person who submitted vegetable with the highest ranking in the provided category

// assumptions:
// no submissions with equal entries (no ties)
// no judging metric that isn't within objects (no error checking req'd)
// 

// iaan's master plan
// make function judgeVegetables with two arguments: array of objects and judging metric
// initialize var 'winner' as object with properties 'name' and 'score'
// use for loop to check the 'count' of each submitted object using array[i].metric
// inside for loop, use if statement to check 'count' against 'score'
// if 'count' is larger, make 'winner' equal to array[i].submitter and make 'score' equal to array[i].metric 
// this will only be overridden if another 'score' is higher
// complete for loop, and return winner.name


// lessons while coding this:
// DOT notation won't work for accessing the metric variable, because it is a string. Use bracket notation.
// careful initializing 'winner' object with different data types
// don't forget to uncomment the function return line


let judgeVegetable = function (veggieArray, judgeMetric) {
   
  let winner = {
    name: '',
    score: 0
  }
  for (let i = 0; i < vegetables.length; i++) {
    if (veggieArray[i][judgeMetric] > winner.score) {
      winner.name = veggieArray[i].submitter;
      winner.score = veggieArray[i][judgeMetric];
    }
  }
  return winner.name;
}


let vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 21,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 400,
    plumpness: 31
  }
]

let metric = "plumpness";


console.log(judgeVegetable(vegetables, metric)); // would return str "Old Man Franklin"

// console.log(vegetables[1][metric]);
