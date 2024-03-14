// var majorityElement = function (nums) {
//   let obj = {};

//   for (let i = 0; i < nums.length; i++) {
//     let key = nums[i];

//     if (obj[key]) {
//       obj[key] = obj[key] + 1;
//     } else obj[key] = 1;

//     if (obj[key] > nums.length / 2) return key;
//   }
// };

function majorityElement(nums) {
  // watch striver video
  let ele = nums[0];
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === ele) count++;
    else if (count === 0) {
      ele = nums[i];
    } else count--;
  }
  return ele;
}

console.log(majorityElement([4, 2, 1, 1, 1, 1, 1, 1, 2, 2, 0]));
console.log(majorityElement([4, 2, 1, 2, 2, 4, 4, 4, 2, 2]));
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
console.log(
  majorityElement([7, 7, 7, 5, 7, 5, 1, 5, 7, 5, 5, 7, 7, 5, 5, 5, 5])
);
