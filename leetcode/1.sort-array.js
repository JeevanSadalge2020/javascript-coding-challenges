function sort_array(arr) {
  let sorted = false;
  while (!sorted) {
    sorted = true;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i + 1], arr[i]] = [arr[i], arr[i + 1]];
        sorted = false;
      }
    }
  }
  return arr;
}

function sort_array_fun(nums) {
  return nums.sort((a, b) => a - b);
}

console.log(sort_array([1, 3, 5, 7, 9, 2, 4, 6, 8, 0]));
console.log(sort_array([100, 0, 99, 1, 98, 2, 97, 3]));
console.log(sort_array_fun([1, 3, 5, 7, 9, 2, 4, 6, 8, 0]));
console.log(sort_array_fun([100, 0, 99, 1, 98, 2, 97, 3]));
