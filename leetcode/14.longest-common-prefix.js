function longestCommonPrefix(strs) {
  if (strs.length === 1) return strs[0];
  let fs = "";
  for (let i = 0; i < strs[0].length; i++) {
    let ch = strs[0][i];
    let flag = true;
    for (let j = 1; j < strs.length; j++) {
      if (ch !== strs[j][i]) {
        flag = false;
        break;
      }
    }
    if (!flag) {
      break;
    } else {
      fs = fs + ch;
    }
  }
  return fs;
}

console.log(longestCommonPrefix(["lower", "lowest", "low"])); // low
console.log(longestCommonPrefix(["flower", "flow", "low"])); // ""
console.log(longestCommonPrefix(["flower", "flight", "flow"])); // fl
console.log(longestCommonPrefix(["flower", "flowstate", "flow"])); // flow
console.log(longestCommonPrefix(["dog", "racecar", "car"])); // ""
console.log(longestCommonPrefix(["lower", "low", "lw"])); // l
console.log(longestCommonPrefix(["own", "town", "owner"])); // ""
