"use strict";

let mein_objekt = {
  name: "Mustermann",
  vorname: "Max",
  alter: 26
};

// So bitte nicht

// for (let e in mein_objekt) {
//   console.log(mein_objekt[e]);
// }

let paare = Object.entries(mein_objekt)
console.log(paare);

console.log('\n');

for (let paar of paare) {
  console.log(paar);
  for(let e of paar) {
    console.log(e);
  } 
}

console.log('\n');

let eigenschaften = Object.keys(mein_objekt);
console.log(eigenschaften);
console.log('\n');
for (let e of eigenschaften) {
  console.log(e);
}