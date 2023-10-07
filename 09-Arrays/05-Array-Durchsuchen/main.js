"use strict";


let personen = [
  "Sebastian",
  "Marcel",
  "Anna",
  "Dennis",
  "Mia"
];

// includes(): Durchsucht das Array ab einem Startindex nach einem Wert und gibt true zurück,
// wenn das Element gefunden wurden, bzw. false, wenn es nicht gefunden wurde
// Syntax: includes(Suchwert, Startindex)
// nicht destruktur


console.log(personen.includes("Firat"));
console.log(personen.includes("Mia"));

console.log(personen.indexOf("Marcel"));

console.log(personen.lastIndexOf("Firat"));


const simpleNames = ['Schulze', 'Meier', 'Schulze', 'Ämter', 'amtsmann', '17demut', '7demut', 'Liedermacher', 'Amtsmann'];

console.log(simpleNames.sort());