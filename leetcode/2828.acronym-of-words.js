// var isAcronym = function (words, s) {
//     /* This has O(n^2) time complexity */
//   return (
//     words.reduce((acc, cur) => {
//       acc = acc + cur[0];
//       return acc;
//     }, "") === s
//   );
// };

function isAcronym(words, s) {
  if (words.length !== s.length) return false;

  let res = "";
  for (let i = 0; i < words.length; i++) {
    res = res + words[i][0];
  }
  return res === s;
}

console.log(isAcronym(["never", "gonna", "give", "up", "on", "you"], "ngguoy")); // true
console.log(isAcronym(["an", "apple"], "a")); // false
console.log(isAcronym(["alice", "bob", "charlie"], "abc")); //true
console.log(isAcronym(["alice", "bob", "charlie"], "ab")); //true
