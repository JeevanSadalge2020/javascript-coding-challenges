// https://www.codewars.com/kata/520b9d2ad5c005041100000f/train/javascript

function pigIt(str) {
  let arr = str.split(" ");
  arr = arr.map((item) => foo(item));
  return arr.join(" ");
}

function foo(word) {
  if (!containsLetter(word)) return word;
  let firstLetter = word[0];
  let str = word.substring(1);
  return `${str}${firstLetter}ay`;
}

function containsLetter(str) {
  return /[a-z]/i.test(str);
  // This checks if a word consist of pure letters, if yes, then it returns TRUE else FALSE
}

console.log(pigIt("Pig latin is cool")); // igPay atinlay siay oolcay
console.log(pigIt("Hello world !")); // elloHay orldway !
