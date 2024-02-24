// https://www.codewars.com/kata/556deca17c58da83c00002db/train/javascript

function tribonacci(signature, n) {
  let arr = [...signature];
  if (n === 0) return [];
  if (n === 1) return [arr[2]];
  if (n === 2) return [arr[1], arr[2]];

  while (n > 3) {
    arr.push(arrSum(arr));
    n--;
  }
  return arr;

  function arrSum(arr) {
    let sum = 0;
    for (let i = arr.length; i > arr.length - 3; i--) {
      sum = sum + arr[i - 1];
    }
    return sum;
  }
}

console.log(tribonacci([1, 1, 1], 10)); //  [1,1,1,3,5,9,17,31,57,105]
console.log(tribonacci([0, 0, 1], 0));
console.log(tribonacci([0, 1, 1], 1));
console.log(tribonacci([1, 1, 1], 5));
console.log(tribonacci([16, 0, 10], 2)); // [0,10]
console.log(tribonacci([2, 13, 8], 2)); // [13,8]
