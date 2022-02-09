function laugh(numLaughs) {
  
  let laugh = "";

  for (let i = 0; i <= numLaughs - 1; i++) {
    laugh += "ha";
  }

  laugh += "!";

  return laugh;
}

console.log(laugh(10));