var maximumWealth = function (accounts) {
  if (accounts.length === 0) return 0;
  else {
    let max_wealth = 0;
    for (const account of accounts) {
      if (sum(account) > max_wealth) {
        max_wealth = sum(account);
      }
    }
    return max_wealth;
  }
};

function sum(arr) {
  return arr.reduce((acc, cur) => acc + cur);
}

console.log(
  maximumWealth([
    [1, 2, 3],
    [3, 2, 1],
  ])
);

console.log(maximumWealth([]));

console.log(
  maximumWealth([
    [2, 8, 0],
    [2, 8, 7],
    [7, 1, 3],
    [1, 9, 5],
  ])
);
