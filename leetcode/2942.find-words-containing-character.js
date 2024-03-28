var findWordsContaining = function (words, x) {
  let arr = [];
  for (let i = 0; i < words.length; i++) {
    if (words[i].includes(x)) arr.push(i);
  }
  return arr;
};

console.log(findWordsContaining(["leet", "code"], "e"));
console.log(findWordsContaining(["leet", "code"], "i"));
console.log(findWordsContaining(["abc", "bcd", "aaaa", "cbc"], "a"));
