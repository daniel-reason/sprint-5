//Looping a Triangle
var hash = "#";
var singleHash = "#";
for (var a = 0; a < 7; a++){
console.log(hash);
hash += singleHash;
}

//FizzBuzz
for(a = 1; a <= 100; a++) {
  if(a % 3 == 0 && a % 5 == 0) {
    console.log("FizzBuzz");
} else if (a % 3 == 0) {
    console.log("Fizz");
} else if (a % 5 == 0) {
  console.log("Buzz");
} else {
  console.log(a);
}
}

//Chess Board
var size = 8;
var square = "";

for (a = 0; a < size; a++) {
  for (b = 0; b < size; b++) {
    if ((a + b) % 2 == 0) {
      square += " ";
    } else {
      square += "#"
    }
  }
    square += "\n";
}
console.log(square);
