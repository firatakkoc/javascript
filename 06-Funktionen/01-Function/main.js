"use strict";

const meine_function = function () {
  return "test";
}

// Function mit Parametern

const meine_function2 = function(name, nachname) {
  console.log(`Hallo ${name} ${nachname}!`);
}

meine_function2("Firat", "Akkoc")


// Default Parametern (Standart Parametern)

const multiplizieren = function (a = 10, b = 20) {
  console.log(a);
  console.log(b);
  console.log(a * b);
}
multiplizieren();
console.log("-----------------------");

let z_1 = 42;
let z_2 = 33;

multiplizieren(z_1, z_2);

console.log("-----------------------");
// return

const multiplizieren2 = function(a,b) {
  return a * b;
}

let z_3 = 22;
let z_4 = 33;
console.log(multiplizieren2(z_3,z_4));


console.log("-----------------------");
// Gültigketsbereiche

let var1 = "Variable 1";

const meine_function3 = function() {
  console.log(var1);
}

meine_function3();





console.log("-----------------------");