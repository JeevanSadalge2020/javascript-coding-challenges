function* fibGenerator() {
  let a = 0;
  let b = 1;
  yield a;
  yield b;
  let c;
  while (true) {
    c = a + b;
    a = b;
    b = c;
    yield c;
  }
}

let gen = fibGenerator();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
