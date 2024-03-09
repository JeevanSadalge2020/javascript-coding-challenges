// https://leetcode.com/problems/two-sum/description/

// var twoSum = function (nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) return [i, j];
//     }
//   }
//   return [];
// };

function twoSum(arr, target) {
  let obj = {};

  for (let i = 0; i < arr.length; i++) {
    if (target - arr[i] in obj) {
      return [obj[target - arr[i]], i];
    } else {
      obj[arr[i]] = i;
    }
    console.log(obj);
  }
  return [];
}

console.log(twoSum([3, 5, 8, 6], 15));
console.log(twoSum([3, 5, 8, 6], 11));
console.log(twoSum([3, 5, 8, 6], 9));
console.log(twoSum([3, 2, 4], 7));
