// an example 

/*
Suppose we want to write a function that calculates the sum of all
numbers from 1 up to (and including) some number n.
*/


function addUpto1(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}

function addUpto2(n) {
  return n * (n + 1) / 2;
}

let t1 = performance.now();
addUpto2(1000000000);
let t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`);
