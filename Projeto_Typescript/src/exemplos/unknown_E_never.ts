let anyEstaDeVolta: any;
anyEstaDeVolta = 3;
anyEstaDeVolta = 5;
anyEstaDeVolta = 'teste';

let stringTest: string = 'verificar';
stringTest = anyEstaDeVolta;

let unknownValor: unknown;
unknownValor = 3;
unknownValor = true;
unknownValor = 'vai sim';

let stringTest2: string = 'agora vai';

if (typeof unknownValor === 'string') {
    stringTest2 = unknownValor;
    console.log(stringTest2);
}
if (typeof anyEstaDeVolta === 'string') {
    stringTest = anyEstaDeVolta;
    console.log(stringTest);
}

function jogaErro(erro: string, codigo: number): never{ //never é referente ao código que nunca foi finalizado, seu encerramento ocorre de forma forçada, com o comando throw.
    throw {error: "deu erro", code: 500};
}
jogaErro('deu erro', 500);