function veryBigSum(arr) {
    let valueToSum = 0;
    for(let i = 0; i < arr.length; i++) {
        valueToSum += arr[i];
    }
    return valueToSum;
}