var numIdenticalPairs = function (nums) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) count++;
    }
  }
  return count;
};

function numIdenticalPairs2(A) {
  /* Try to undrstand this optimal solution */
  let ans = 0;
  const cnt = {};

  for (let x of A) {
    ans = ans + cnt[x] || 0;
    cnt[x] = (cnt[x] || 0) + 1;
  }

  return ans;
}

console.log(numIdenticalPairs([1, 2, 3, 1, 1, 3]));
console.log(numIdenticalPairs([1, 1, 1, 1]));
console.log(numIdenticalPairs([1, 2, 3]));
