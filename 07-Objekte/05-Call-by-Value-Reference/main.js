"use strict";

let meine_var = "Ruben";
let meine_obj = {
  zahl: 5000
};

const meine_function = function(v, o) {
  v = "Denis";
  o.zahl = 2500;
}

meine_function(meine_var, meine_obj);

console.log(meine_var);
console.log(meine_obj.zahl);

// call-by-value (dt. = Übergabe als Wert): gilt für primitive Datentypen (String, Number, Boolean)
// call-by.referance (dt.: Übergabe als Verveis/Rückverweis): gilt für komplexere Datantypen (Objekte, Funktionen, Arrays)