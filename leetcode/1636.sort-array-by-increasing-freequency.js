var frequencySort = function (nums) {
  let my_map = {};
  console.log(my_map);
  for (let i = 0; i < nums.length; i++) {
    let count = 1;
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] === nums[j] && i !== j) count++;
    }
    my_map[count] = nums[i];
  }
  console.log("object", my_map);
  console.log("keys", Object.keys(my_map));
  //   console.log("values", Object.values(my_map));
  let sorted_arr = sort_array(Object.keys(my_map));
  return sorted_arr.map((ele) => {
    my_map[ele];
  });
};

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

console.log(frequencySort([1, 1, 2, 2, 2, 3])); // [3,1,1,2,2,2]
// frequencySort([2, 3, 1, 3, 2]); // [1,3,3,2,2]
0;
