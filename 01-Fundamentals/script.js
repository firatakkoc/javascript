// Strict Mode

'use strict';

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('ich darf fahren :D');

// const interface = 'Audio'; SyntaxError: Unexpected strict mode reserved word

// Functions

function logger() {
  console.log('Mein Name ist Firat');
}

logger();

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`
  return juice;
}

// console.log(fruitProcessor(5, 1)); oder

const appleJuice = fruitProcessor(5, 4);
console.log(appleJuice);


// Function Declarations 


function calcAge1(birthYear) {
  return 2024 - birthYear;
}

console.log(calcAge1(1994));

// Function Expressions

const  calcAge2 = function (birthYear) {
  return 2024 - birthYear;
}

// Arrow functions 

const calcAge3 = birthYear =>  2024 - birthYear;
const age3 = calcAge3(1994);
console.log('Your age:', age3);