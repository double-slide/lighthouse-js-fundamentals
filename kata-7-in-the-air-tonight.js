// requirements
// function receives array containing strings "clean" and "dirty", as well as decimal number indicating acceptable air pollution level
// if ratio of dirty/(dirty+clean) < threshold, function returns "Clean"
// if ratio of dirty/(dirty+clean) > threshold, function returns "Polluted" 

// iaan's master plan
// function receives samples array and threshold value
// init cleanCount = 0
// init dirtyCount = 0
// for loop samples.length
  // if samples[i] = clean, cleanCount++
  // if samples[i] = dirty, dirtyCount++
// finish for loop
// if dirtyCount / (dirtyCount + cleanCount) < threshold
// return "Clean"
// else return "Dirty"




const checkAir = function (samples, threshold) {
let cleanCount = 0;
let dirtyCount = 0;
for (let i = 0; i < samples.length; i++) {
  if (samples[i] == "clean") {
    cleanCount++;
  } else if (samples[i] == "dirty") {
    dirtyCount++;
  } else {
    return "Bad input";
  }
}
if (dirtyCount/(dirtyCount+cleanCount) < threshold) {
  return "Clean";
} else {
  return "Polluted";
}
};



console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
));

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
));

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
))