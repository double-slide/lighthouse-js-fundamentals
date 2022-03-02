// requirements
// function takes object array with instructor names and courses
// returns object with instructor names based on course
// 


// iaan's master plan
// define empty object 
// use for loop to add each course to object, if not already there
// use for loop to add instructor name to course array, and add array to object

// lessons from this exercise:
// use Object.keys(Object).length to get object length when only keys are defined, no values
// For some reason calling object parameters at the end only worked with bracket notation, not dot
// 



const organizeInstructors = function(instructors) {

  let courseObj = {};

  for (let i = 0; i < instructors.length; i++) {
  
    let repeatFlag = false;
  
    for (let j = 0; j < Object.keys(courseObj).length; j++) {
      if (((Object.keys(courseObj))[j]) == instructors[i].course) {
        repeatFlag = true;
      }
    }

    if (repeatFlag == false) {
      let courseName = instructors[i].course;
      courseObj[courseName] = [];
    }

  }
  
  for (let m = 0; m < Object.keys(courseObj).length; m++) {
    
    let tempNameArray = [];

    for (let k = 0; k < instructors.length; k++) {
      if (instructors[k].course == (Object.keys(courseObj))[m]) {
        tempNameArray.push(instructors[k].name);
      }
    }

    let key = ((Object.keys(courseObj))[m]);

    courseObj[key] = tempNameArray;

  }

  return courseObj;

}

console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));

console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));
