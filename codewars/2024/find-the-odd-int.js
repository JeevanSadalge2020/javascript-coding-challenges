// https://www.codewars.com/kata/54da5a58ea159efa38000836/javascript

function findOdd(A) {
  if (A.length === 0) return 0;
  if (A.length === 1) return A[0];
  for (let i = 0; i < A.length; i++) {
    let c = 0;
    for (let j = 0; j < A.length; j++) {
      if (A[i] === A[j]) c++;
    }
    if (c % 2 !== 0) return A[i];
  }
}

console.log(findOdd([8]));
console.log(findOdd([0, 1, 0, 1, 0]));
console.log(findOdd([1, 1, 2]));
console.log(findOdd([0, 1, 0, 1, 0]));
console.log(findOdd([0, 1, 0, 1, 0]));
console.log(findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]));

// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).
