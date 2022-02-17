function getDivisorsCnt(n) {
  let count = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) count++;
  }
  return count;
}

console.log(getDivisorsCnt(4)); //3
console.log(getDivisorsCnt(5)); //2
console.log(getDivisorsCnt(6)); //4
console.log(getDivisorsCnt(30)); //8
