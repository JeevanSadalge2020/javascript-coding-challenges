// https://www.codewars.com/kata/5467e4d82edf8bbf40000155/train/javascript

function descendingOrder(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  let arr = n
    .toString()
    .split("")
    .map((num) => +num);
  let sorted = false;
  while (!sorted) {
    sorted = true;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] < arr[i + 1]) {
        [arr[i + 1], arr[i]] = [arr[i], arr[i + 1]];
        sorted = false;
      }
    }
    if (sorted) return +arr.join("");
  }
}

console.log(descendingOrder(111));
console.log(descendingOrder(956101500));
