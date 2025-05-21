// let says you have a string and we want to count the char which has more repeating compare with others.

let string =
  "helloooo, this is a newww string test, to verifyyyy, the wooooords.";
let charToCount = "";
let count = 0;
let bigQuantityFound = 0;

let splitedString = string.split("");
console.log(splitedString);

for (let i = 0; i < splitedString.length; i++) {
  const currentChar = splitedString[i];

  if (currentChar && currentChar === charToCount) {
    charToCount = charToCount;
    count += 1;
    if (count > bigQuantityFound) {
      bigQuantityFound = count;
    }
  } else {
    charToCount = currentChar;
    count = 1;
  }
}

console.log(bigQuantityFound); // 5
// the expected result is 5.
