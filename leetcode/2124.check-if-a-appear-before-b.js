var checkString = function (s) {
  if (!s.includes("a")) return true;
  else {
    let i = 0;
    let a = [];
    let b = [];
    while (i < s.length) {
      if (s[i] === "a") a.push(i);
      else b.push(i);
      i++;
    }
    return Math.max(...a) < Math.min(...b);
  }
};

/* var checkString = function(s) {
    for(let i=0;i<s.length;i++){
        if(s[i]=='b' && s[i+1]=='a'){
            return false;
        }
    }
    return true
}; */

/* var checkString = function (s) {
    return s.indexOf("ba") === -1;    // is no  a  after  b ?
};*/

console.log(checkString("bbb"));
console.log(checkString("aaaababbbb"));
console.log(checkString("aaabbb"));
console.log(checkString("bbb"));
console.log(checkString("bbba"));
