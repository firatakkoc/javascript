'use strict';

// Normal Array
let produkte = [
    'Banane', 
    'Cola', 
    'Orange', 
    'Tomaten', 
    'Brot'
];


for (let i = 0; i < produkte.length; i++) {
  console.log(produkte[i]);
}

produkte.push('Apfel');
produkte.push('33');
produkte.push('true');

console.log(produkte);


let produkte_array = [
  'Banane',
  'Äpfel',
  'Schokolade',
  'Kartoffel',
  'Cola'
];

console.log(produkte_array);


let produkte_objekt = {
  0: 'Banane',
  1: 'Äpfel',
  2: 'Orange',
  3: 'Brot',
  4: 'Milch'
};

console.log(produkte_objekt[3]);