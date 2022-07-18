let button = document.getElementById('button');
let input1 = document.getElementById('input1') as HTMLInputElement;
let input2 = document.getElementById('input2') as HTMLInputElement;

//Exemplo de fução com parâmetros tipados
function adicionarNumeros(numero1: number, numero2: number, printarResultado: boolean, frase1: string){
    const resultado = numero1 + numero2;        
    if (printarResultado) {
        console.log(frase1 + resultado);
    }
    return resultado;
}

//A variável abaixo tem seu tipo inferido pelo valor inicial
let printarResultado = true;

//já nesse caso estamos dizendo expliciitamente qual é o o seu tipo
let frase1: string;
//e só depois iniciamos a variável com um valor.
frase1 = "O número é ";

//Como a busca pelo button na linha 1 pode trazer um null (já que esse id pode não estar presente no index.html), é importante confirmar se ele tem um valor.
if (button) {
    button.addEventListener('click', () => {
        if (input1 && input2) {
            adicionarNumeros(Number(input1.value), Number(input2.value), printarResultado, frase1);
        }
    });
}

