"use strict";

let konto_1 = {
  iban: "DE123400001234003",
  bic: "WASDESXPHKC",
  inhaber: {
    vorname: "Max",
    nachname: "Müller",
    geschlect: "männlich",
    alter: 25
  },
  kontostand: 3500,
  aktiv: true
}


let konto_2 = {
  iban: "DE1234000045321003",
  bic: "WASDESXPHKC",
  inhaber: {
    vorname: "Lennard",
    nachname: "Konradi",
    geschlect: "männlich",
    alter: 28
  },
  kontostand: 7500,
  aktiv: true
}


const kontostand_ausgaben = function(konto, amount) {
  if(amount > konto.kontostand) {
    console.log("Haben Sie geld nicht genug");
  }else {
    konto.kontostand -= amount;
    console.log(konto.kontostand);
  }
}

kontostand_ausgaben(konto_1, 99);
