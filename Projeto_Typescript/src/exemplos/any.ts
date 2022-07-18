let valrAny: any;
valrAny = 3;
valrAny = 'Olá';
valrAny = true;

let valorString: string = 'teste';
valorString = valrAny;
let valorString2: string = 'teste 2';
valorString = valrAny;

function somarStrings(string1: string, string2: string) {
    console.log(string1 + string2);
}

somarStrings(valorString, valorString2);
somarStrings('olá ', 'como vai?');