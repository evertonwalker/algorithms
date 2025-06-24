// You need calculate the diagonal difference between both square matrix
// example  d1 = 1 + 5 + 9 = 15 / d2 = 3 + 5 + 9 = 17
// 15 - 17 = -2;

let matrix = [[1, 2, 3], [4, 5, 6], [9, 8, 9]];

function diagonalDifference(arr) {

    let d1 = 0;
    let d2 = 0;
    for(let i = 0 ; i < arr.length; i++) {
        d1 += arr[i][i];
        d2 += arr[(arr.length - 1) - i][i];
    }

    return Math.abs(d1 - d2);
}

console.log(diagonalDifference(matrix)); // 2

