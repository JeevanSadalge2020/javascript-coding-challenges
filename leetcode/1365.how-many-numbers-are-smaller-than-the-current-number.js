var smallerNumbersThanCurrent = function (nums) {
  return nums.map((num, i, arr) => {
    let count = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] < num) count++;
    }
    return count;
  });
};

console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3]));
console.log(smallerNumbersThanCurrent([6, 5, 4, 8]));
console.log(smallerNumbersThanCurrent([7, 7, 7, 7]));
