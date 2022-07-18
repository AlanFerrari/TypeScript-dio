"use strict";
let anyEstaDeVolta;
anyEstaDeVolta = 3;
anyEstaDeVolta = 5;
anyEstaDeVolta = 'teste';
let stringTest = 'verificar';
stringTest = anyEstaDeVolta;
let unknownValor;
unknownValor = 3;
unknownValor = true;
unknownValor = 'vai sim';
let stringTest2 = 'agora vai';
if (typeof unknownValor === 'string') {
    stringTest2 = unknownValor;
    console.log(stringTest2);
}
if (typeof anyEstaDeVolta === 'string') {
    stringTest = anyEstaDeVolta;
    console.log(stringTest);
}
function jogaErro(erro, codigo) {
    throw { error: "deu erro", code: 500 };
}
jogaErro('deu erro', 500);
