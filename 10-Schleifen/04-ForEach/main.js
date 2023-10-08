"use strict";

let zahlen = [5,45,63,3,4,34,65,90];
zahlen.sort((a,b) => a - b);

zahlen.forEach(element => {
  console.log(element);
});


console.log("-----------------\n");

let zahlen2 = [5,45,63,3,4,34,65,90];

let meine_function = function (e) {
  console.log(e);
};

zahlen2.forEach(meine_function);

console.log("-----------------\n");
zahlen.forEach(function(e) {
  console.log(e);
});

console.log("-----------------\n");
// for_in schleifen

let mein_array = [
  "Max",
  "Peter",
  "Mia",
  "Mark"
];

let mein_objekt = {
  name: "Max",
  nachname: "Mustermann",
  alter: 16
}; 

for (let a in mein_array) {
  console.log(a);
};
console.log("-----------------");
console.log("");

for (let a in mein_objekt) {
  console.log(a);
};
console.log("-----------------");
for (let w of mein_array) {
  console.log(w);
};

console.log("-----------------");
// Geht nicht, da einfache Objekte nich iterierbar sind
// for (let y of mein_objekt) {
//   console.log(y);
// };