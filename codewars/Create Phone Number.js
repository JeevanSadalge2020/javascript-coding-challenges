// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

// Example:
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"

function createPhoneNumber(numbers) {
  let one = "";
  let two = "";
  let three = "";

  for (let i = 0; i <= 2; i++) {
    one = one + numbers[i];
  }
  one = `(${one}) `;

  for (let i = 3; i <= 5; i++) {
    two = two + numbers[i];
  }
  two = `${two}-`;

  for (let i = 6; i <= 9; i++) {
    three = three + numbers[i];
  }
  return one + two + three;
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
