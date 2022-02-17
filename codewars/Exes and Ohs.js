// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

function XO(str) {
  const array = str.split("");
  console.log(array);
  let x = 0;
  let o = 0;
  array.forEach(element => {
    if (element === "x" || element === "X") x++;
    if (element === "o" || element === "O") o++;
  });
  console.log(x);
  console.log(o);
  return x === o ? true : false;
}

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false
