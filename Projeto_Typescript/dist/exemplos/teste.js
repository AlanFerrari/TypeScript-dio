"use strict";
let button2 = document.getElementById('button');
let input3 = document.getElementById('input1');
let input4 = document.getElementById('input2');
function somarNumeros(numero1, numero2, devePrintar, frase) {
    let resultado = numero1 + numero2;
    if (devePrintar) {
        console.log(frase + resultado);
    }
    return numero1 + numero2;
}
let devePrintar = true;
let frase;
frase = 'O valor é ';
if (button2) {
    button2.addEventListener('click', () => {
        if (input3 && input4) {
            console.log(somarNumeros(Number(input1.value), Number(input2.value), devePrintar, frase));
        }
    });
}
