// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
  var vowelsCount = 0;
  const arr = str.split("");
  arr.forEach(item => {
    if (
      item === "a" ||
      item === "e" ||
      item === "i" ||
      item === "o" ||
      item === "u"
    ) {
      vowelsCount++;
    }
  });
  return vowelsCount;
}

console.log(getCount("jeevan")); //3
