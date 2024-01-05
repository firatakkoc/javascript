"use strict";

let konto_1 = {
  iban: "DE23342343523450003",
  bic: "WEASERTGD",

  inhaber_1: {
    vorname: "Max",
    nachname: "Mustermann",
    geschlecht: "männlich",
    alter: 25
  },
  kontostand: 3599,
  aktiv: true
};


let konto_2 = {
  iban: "DE23342343523450003",
  bic: "WEASERTGD",

  inhaber_1: {
    vorname: "Maria",
    nachname: "Musterfrau",
    geschlecht: "weiblich",
    alter: 22
  },
  kontostand: 599,
  aktiv: true
};


// Werte auslesen (Dot-Notation);

let wert_1 = konto_1.iban;

console.log(`${konto_1.inhaber_1.vorname} ${konto_1.inhaber_1.nachname} hat ${konto_1.kontostand}€ auf seinem Konto.`);

// Werte setzen (Dot Notation)

konto_1.abhebelimit = 1000;



// Werte setzen bzw. verändern 

konto_1.kontostand = 3000;
console.log(`${konto_1.inhaber_1.vorname} ${konto_1.inhaber_1.nachname} hat ${konto_1.kontostand}€ auf seinem Konto.`);


// Bracket-Notation

let wert2 = konto_1["iban"];


let wert3 = konto_1['inhaber_1']['geschlecht'];
console.log(wert3);

// Werte setzen bzw. verändern (Bracket-Notation)

konto_1['kontostand'] = 2900;
console.log(konto_1['kontostand']);