"use strict";
let valorAny;
valorAny = 3;
valorAny = "Olá";
valorAny = true;
let valorString = "teste";
valorString = valorAny;
let valorString2 = "testão";
valorString2 = valorAny;
function somaString(string1, string2) {
    console.log(string1 + string2);
}
somaString(valorString, valorString2);
somaString("Olá", ", como vai?");
