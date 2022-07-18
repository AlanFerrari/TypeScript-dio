const pessoa = {
    nome: 'Mariana',
    idade: 28,
    profissao1: 'desenvolvedora'
}
pessoa.idade = 25;

const andre: {nome: string, idade: number, profissao1: string} = {
    nome: 'André',
    idade: 21,
    profissao1: 'pintor'
}

enum Profissao1{
    Professora,
    Atriz,
    Desenvolvedora,
    Desenvolvedor,
    Cozinheira
}

interface Pessoa1{
    nome: string,
    idade: number,
    profissaoP?: Profissao1
}

interface Estudante extends Pessoa1{
    materias: string[];
}

const vanessa: Pessoa1 = {
    nome: 'Vanessa',
    idade: 23,
    profissaoP: Profissao1.Desenvolvedora
}

const alan: Pessoa1 = {
    nome: 'Alan',
    idade: 32,
    profissaoP: Profissao1.Desenvolvedor
}

const jessica: Estudante = {
    nome: 'Jessica',
    idade: 20,
    profissaoP: Profissao1.Desenvolvedora,
    materias: ['POO', 'PWEB', 'PA']
}

const monica: Estudante = {
    nome: 'Mônica',
    idade: 27,
    materias: ['POO', 'PWEB', 'PA']
}

function listar(lista: string[]){
    for (const item of lista) {
        console.log('- ', item);        
    }
}

listar(monica.materias);