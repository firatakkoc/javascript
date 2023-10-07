"use strict";

  // let iban  = "DE23342343523450003";
  // let bic = "WEASERTGD";
  // let kontostand = 2300;
  // let aktiv = true;


//   let konto_1 = {
//     iban: "DE23342343523450003",
//     bic: "WEASERTGD",
//     kontostand: 2300,
//     aktiv: true
// };


// let konto_2 = {
//   iban: "DE23342345565350003",
//   bic: "WEASERTGD",
//   kontostand: 2300,
//   aktiv: true
// }


// Inhaber-Objekt (Vornamen, Nachnamen, Geschlecht, Alter)

let inhaber_1 = {
  vorname: "Max",
  nachname: "Mustermann",
  geschlecht: "männlich",
  alter: 25
}



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

let auto = {
  marke: "Volvo",
  modell: "xc60",
  kraftstofffahrt: "Benzin",
  kilometerstand: 12000,
  ausstattung: {
    navigationssystem: true,
    klimaanlage: true,
    sitzheizung: true,
    tempomat: true,
    panoramadach: false
  },
  zustand: "gebraucht",
  preis: 34000
}

console.log(auto);
