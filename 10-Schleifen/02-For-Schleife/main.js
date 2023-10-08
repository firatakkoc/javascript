"use strict";

let x = 0;

for (let i = 0; i < 5; i++) {
  if (i == 3){
    continue;
  }else if (i == 4)
  console.log(i);
}

console.log('-----------------------\n');
// mit Array

let personen = [
  "Peter",
  "Anne",
  "Marc",
  "Maximillian",
  "Mia"
];

for(let i = 0; i < personen.length; i++) {
  console.log(`Hallo ${personen[i]}`);
}

console.log("------------------\n");
// Mehrdimensionale Array;

let waren = {
  obst: [
    "Äpfel",
    "Birnen",
    "Bananen"
  ],
  gemuse: [
    "Möhren",
    "Sellerie",
    "Kohl"
  ],
  brot: [
    "Graubrot",
    "Schwarzbrot",
    "Vollkornbrot"
  ]
}

for (let kategorie in waren) {
  console.log(`${kategorie}:`.toUpperCase());
  // Dies gibt die Kategorie aus (z.B. "obst")
  for (let j = 0; j < waren[kategorie].length; j++) {
    console.log(`${waren[kategorie][j]}`);  // Dies gibt die einzelnen Produkte in der jeweiligen Kategorie aus
  }
  console.log("-----------");
}
