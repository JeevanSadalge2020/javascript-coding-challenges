// Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.

// Note: no empty arrays will be given.

function highestRank(arr) {
  const obj = {};
  arr.forEach(ele => (obj[ele] = 0));
  for (const ele of arr) {
    obj[ele] = obj[ele] + 1;
  }
  const maxCount = Math.max(...Object.values(obj));
  let higherRank = [];
  const keys = Object.keys(obj);
  for (key of keys) {
    if (obj[key] === maxCount) {
      higherRank.push(key);
    }
  }
  return Math.max(...higherRank);
}

console.log(highestRank([1, 2, 2, 3, 2]));
console.log(highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12]));
console.log(highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12, 10]));
console.log(highestRank([12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]));
