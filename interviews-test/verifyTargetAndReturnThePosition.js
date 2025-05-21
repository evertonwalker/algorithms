// You have a array of values, you need verify if the current position and the next one will match with the target
// and if it's corresponding you need return the position of both elements.

let array = [2, 7, 5, 4, 1, 2, 4, 3, 6];
let target = 9;

function verifyIndexOfTargets(array, target) {
  let arrayIndex = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] + array[i + 1] === target) {
      arrayIndex.push(i, i + 1);
    }
  }

  return arrayIndex;
}

console.log(verifyIndexOfTargets(array, target));
// expected answer [0, 1, 2, 3, 7, 8];
