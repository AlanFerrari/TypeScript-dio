"use strict";
let valrAny;
valrAny = 3;
valrAny = 'Olá';
valrAny = true;
let valorString = 'teste';
valorString = valrAny;
let valorString2 = 'teste 2';
valorString = valrAny;
function somarStrings(string1, string2) {
    console.log(string1 + string2);
}
somarStrings(valorString, valorString2);
somarStrings('olá ', 'como vai?');
