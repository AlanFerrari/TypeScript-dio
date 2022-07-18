type input = number | string;
function somarValores1(input1: input, input2: input){
    if (typeof input1 === 'string' || typeof input2 === 'string') {
        return input1.toString() + input2.toString();
    }
    else{
        return input1 + input2;
    }
}

console.log(somarValores1(4, 6));
console.log(somarValores1('Olá ','como vai?'));
console.log(somarValores1('Quantos anos vc tem? ', 32));