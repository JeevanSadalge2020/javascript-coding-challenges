// https://www.codewars.com/kata/52449b062fb80683ec000024/train/javascript

function generateHashtag(str) {
  str = str.trim(); // this will remove all spaces beforehand - IMP
  if (!str) return false;
  else {
    let x = str
      .split(" ")
      .map((item) => capitalize(item))
      .filter((item) => item);

    let final = x.join("");
    final = `#${final}`;
    if (final.length > 140) return false;
    return final;
  }
}

function capitalize(str) {
  if (str) return str[0].toUpperCase() + str.substring(1);
  else return "";
}

console.log(
  generateHashtag(
    "   hello   world mmmmmmmmmm jjjjjjjjjjjjjjjjj            hhhhhhhhhhhhhhhhhhhhhhhhhh lkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk  "
  )
);

console.log(generateHashtag(""));
console.log(generateHashtag("  hello  HELLO"));
