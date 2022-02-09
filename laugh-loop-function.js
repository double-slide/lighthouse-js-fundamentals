function laugh(num) {
  
  let laughter = "";

  for (let i = 0; i <= num - 1; i++) {
    laughter += "ha";
  }

  laughter += "!";

  return laughter;
}

console.log(laugh(10));