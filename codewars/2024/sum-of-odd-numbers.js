function rowSumOddNumbers(n) {
  let x = n * (n - 1) + 1;
  let sum = x + 2 * (n - 1);
  return n * (n * (n - 1) + 1) + n * (n - 1);
  // ABOVE equation simplified into n^3
  // You can directly guess this by just looking at the output for n from 1 to 5
}

console.log(rowSumOddNumbers(1));
console.log(rowSumOddNumbers(2));
console.log(rowSumOddNumbers(3));
console.log(rowSumOddNumbers(4));
console.log(rowSumOddNumbers(5));
