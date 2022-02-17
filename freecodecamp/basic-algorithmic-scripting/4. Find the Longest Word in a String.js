// Return the length of the longest word in the provided sentence.

// Your response should be a number.

function findLongestWordLength(str) {
  const arr = str.split(" ");
  let maxLength = arr[0].length;
  for (const item of arr) {
    if (item.length > maxLength) {
      maxLength = item.length;
    }
  }
  return maxLength;
}

console.log(
  findLongestWordLength("The quick brown fox jumped over the lazy dog")
);
