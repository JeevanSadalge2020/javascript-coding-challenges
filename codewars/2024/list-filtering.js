function filterList(list) {
  return list.filter((item) => typeof item !== "string");
}

console.log(filterList([1, 2, "a", "b"]));
console.log(filterList([1, "a", "b", 0, 15]));
console.log(filterList([1, 2, "aasf", "1", "123", 123]));

// filterlist([1, 2, "a", "b"]) == [1, 2];
// filterlist([1, "a", "b", 0, 15]) == [1, 0, 15];
// filterlist([1, 2, "aasf", "1", "123", 123]) == [1, 2, 123];

// https://www.codewars.com/kata/53dbd5315a3c69eed20002dd/train/javascript
