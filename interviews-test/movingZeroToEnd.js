// Thinking you have a array of values, we want to move all 0 values to end of this array.

let array = [0, 1, 2, 4, 0, 5, 1, 2, 3, 8, 0, 1, 0];

for (let i = 0; i < array.length; i++) {
  // so What we're doing here is, basically we verify if the number is zero, so, in javascript zero means false
  // and we verify if is not the last index in array, because if it's isn't necessary to change anything
  // so we remove this is item from array and added again on the end
  if (!array[i] && i !== array.length - 1) {
    array.splice(i, 1);
    array.push(0);
  }
}

console.log(array);
