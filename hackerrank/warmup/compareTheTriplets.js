let a = [17, 28, 30];
let b = [99, 16, 8];
let arrayCount = [0, 0];

// rules
// if A > B ---> A + 1
// if B > A ---> B + 1
// B === A = no points.

for (let i = 0; i < a.length; i++) {
  if (a[i] > b[i]) arrayCount[0] = arrayCount[0] + 1;
  if (a[i] < b[i]) arrayCount[1] = arrayCount[1] + 1;
}

console.log(arrayCount); // result -> [1 , 1]
