// https://www.codewars.com/kata/55a2d7ebe362935a210000b2/train/javascript

function findSmallestInt(args) {
  let smallest = args[0];
  for (let i = 0; i < args.length; i++) {
    if (args[i] < smallest) {
      smallest = args[i];
    }
  }
  return smallest;
}

console.log(findSmallestInt([1, 2, 3, 1, 5, 6, 2, 0]));
