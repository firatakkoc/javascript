"use strict";


let x = 0;

while (x < 5) {
  x = x + 1;
  console.log(`While: ${x}`);
  
}

// break

let z = 0;

while(z < 10) {
  z++;
  if (z <= 5) {
    break;
  }
  console.log(z);
}