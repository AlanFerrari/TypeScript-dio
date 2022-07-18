// Como podemos rodar isso em um arquivo .ts sem causar erros? 

let funcionario = {
    codigo: 10,
    nome: 'John'
};

let funcionario2: {codigo: number, nome: string} = {
    codigo: 10,
    nome: "Jhon"
};

interface Funcionario {
    codigo: number,
    nome: string
}

let funcionario3: Funcionario = {
    codigo: 200,
    nome: 'Jhon'
}

let objetoFuncionario = {} as Funcionario;
objetoFuncionario.codigo = 10;
objetoFuncionario.nome = "John";

let objetoFuncionario2: Funcionario = {
    codigo: 10,
    nome: 'John'
}