// https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/train/javascript

// function duplicateEncode(x) {
//   x = x.split("");
//   return x.filter((item) => item);
// }

function duplicateEncode(word) {
  let res = [];
  word = word.toLowerCase();
  for (let i = 0; i < word.length; i++) {
    res[i] = "(";
    for (let j = 0; j < word.length; j++) {
      if (word[i] === word[j] && i !== j) {
        res[i] = ")";
      }
    }
  }
  return res.join("");
}

console.log(duplicateEncode("din"));
console.log(duplicateEncode("recede"));
console.log(duplicateEncode("Success"));
console.log(duplicateEncode("(( @"));
