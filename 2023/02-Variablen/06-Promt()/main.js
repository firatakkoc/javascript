"use strict";

let name = prompt("Wie heißt du?");

let nachname = prompt("Nachname?");

if (name && nachname) {
  alert("Hallo, " + name + " "+ nachname+ "!");
} else {
  alert("Hallo!");
}
