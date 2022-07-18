"use strict";
const pessoa = {
    nome: 'Mariana',
    idade: 28,
    profissao1: 'desenvolvedora'
};
pessoa.idade = 25;
const andre = {
    nome: 'André',
    idade: 21,
    profissao1: 'pintor'
};
var Profissao1;
(function (Profissao1) {
    Profissao1[Profissao1["Professora"] = 0] = "Professora";
    Profissao1[Profissao1["Atriz"] = 1] = "Atriz";
    Profissao1[Profissao1["Desenvolvedora"] = 2] = "Desenvolvedora";
    Profissao1[Profissao1["Desenvolvedor"] = 3] = "Desenvolvedor";
    Profissao1[Profissao1["Cozinheira"] = 4] = "Cozinheira";
})(Profissao1 || (Profissao1 = {}));
const vanessa = {
    nome: 'Vanessa',
    idade: 23,
    profissaoP: Profissao1.Desenvolvedora
};
const alan = {
    nome: 'Alan',
    idade: 32,
    profissaoP: Profissao1.Desenvolvedor
};
const jessica = {
    nome: 'Jessica',
    idade: 20,
    profissaoP: Profissao1.Desenvolvedora,
    materias: ['POO', 'PWEB', 'PA']
};
const monica = {
    nome: 'Mônica',
    idade: 27,
    materias: ['POO', 'PWEB', 'PA']
};
function listar(lista) {
    for (const item of lista) {
        console.log('- ', item);
    }
}
listar(monica.materias);
