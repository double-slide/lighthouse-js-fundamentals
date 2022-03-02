// requirements
// function receives date as type string in format "YYYY/MM/DD"
// function returns in format "December 2nd, 2017"


// iaan's master plan
// initialize variables year, month, day, letters
//
// parse year string into number
// set year
//
// parse month string into number
// create object monthNum with name: January / number: 01
// use loop and if statement to set month based on monthNum check
// 
// parse day into number
// create object dayLetters with
// day: 1 letters: st
// day: 2 letters: nd
// day: 3 letters: rd
// day: 4 letters: th
// use if statements to set letters, or if >4 set as "th"
// 
// return string of month, day, letters, year

const talkingCalendar = function(date) {

  let year = "";
  let month = "";
  let monthNum = "";
  let dayNum = "";
  let day = "";
  let letters = "th";

  for (let i = 0; i < 4; i++) {
    year += date[i];
  }

  let monthNumArray = [
    {name: "January", number: "01"},
    {name: "February", number: "02"},
    {name: "March", number: "03"},
    {name: "April", number: "04"},
    {name: "May", number: "05"},
    {name: "June", number: "06"},
    {name: "July", number: "07"},
    {name: "August", number: "08"},
    {name: "September", number: "09"},
    {name: "October", number: "10"},
    {name: "November", number: "11"},
    {name: "December", number: "12"},
  ]
  
  for (let j = 5; j < 7; j++) {
    monthNum += date[j];
  }

  for (let k = 0; k < 12; k++) {
    if (monthNum == monthNumArray[k].number) {
      month = monthNumArray[k].name
    }
  }

  let dayLettersArray = [
    {day: "01", letters: "st"},
    {day: "02", letters: "nd"},
    {day: "03", letters: "rd"},
  ]

  for (let m = 8; m < 10; m++) {
    dayNum += date[m];
  }

  for (let n = 0; n < 3; n++) {
    if (dayNum == dayLettersArray[n].day) {
      letters = dayLettersArray[n].letters;
    }
  }

  day = Number(dayNum);

  return month + " " + day + letters + ", " + year;

};

console.log(talkingCalendar("2017/01/01"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));