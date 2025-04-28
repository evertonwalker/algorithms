let array = [1, 2, 3, 5, 6, 7];

function sumArray(array) {
  return array.reduce(
    (accumulatorItem, currentValue) => accumulatorItem + currentValue,
    0
  );
}

console.log(sumArray(array)); // 24;
