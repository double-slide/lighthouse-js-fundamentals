

function makeLine(length) {
  var line = "";
  for (var j = 1; j <= length; j++) {
    line += "* ";
  }
  return line;
}

function buildTriangle(size) {
  let triangle = "";

  for (let i = 1; i <= size; i++) {
    triangle += makeLine(i);
    if (i < size) {
      triangle += "\n";
    }
  }

  return triangle;
}

console.log(buildTriangle(10));



