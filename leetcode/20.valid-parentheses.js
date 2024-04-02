var isValid = function (s) {
  let openingBrackets = ["(", "{", "["];

  let map = new Map();
  map.set("}", "{");
  map.set("]", "[");
  map.set(")", "(");
  let l = s.length;
  let i = 0;
  let arr = [];
  while (i < l) {
    if (openingBrackets.includes(s[i])) {
      arr.push(s[i]);
    } else {
      if (arr[arr.length - 1] === map.get(s[i])) {
        arr.pop();
      } else return false;
    }
    i++;
  }
  if (arr.length === 0) return true;
  return false;
};

console.log(isValid("{}[]"));
console.log(isValid("{}[]()"));
console.log(isValid("{}[()"));
console.log(isValid("{}(])"));
console.log(isValid("{[()]}"));
console.log(isValid("({{{{}}}))"));
