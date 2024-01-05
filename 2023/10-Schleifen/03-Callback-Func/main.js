"use strict";

let func1 = function () {
    console.log("Ich bin function 1!");
};

let func2 = function () {
    console.log("Ich bin function 2!");
}

func2(func1());

