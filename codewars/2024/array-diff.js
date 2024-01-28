// https://www.codewars.com/kata/523f5d21c841566fde000009/train/javascript
// console.log(// https://www.codewars.com/kata/523f5d21c841566fde000009/train/javascript

function arrayDiff(a, b) {
  for (let i = 0; i < b.length; i++) {
    a = removeArrElement(a, b[i]);
  }
  return a;
}

function removeArrElement(arr, ele) {
  return arr.filter((item) => {
    if (item !== ele) return item.toString();
  });
}

console.log(
  arrayDiff(
    [18, 9, -18, -2, 12, -1, -13, -4, 8],
    [18, 9, -18, -2, 12, -1, -13, -4]
  )
);
console.log(arrayDiff([5, 3, -6, 18, -9, 0, -1, -8], [5, 3, -6, 18]));
// -9 0 -1 -8

// console.log(removeArrElement([5, 3, 0, 6, 18, 0, -9, -8, -1, -8], 5));
