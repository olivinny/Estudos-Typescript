"use strict";
const pessoa = {
    nome: "Mariana",
    idade: 28,
    profissao: "desenvolvedora",
};
pessoa.idade = 25;
const andre = {
    nome: "André",
    idade: 25,
    profissao: "pintor",
};
const paula = {
    nome: "Paula",
    idade: 25,
    profissao: "Desenvolvedora",
};
var Profissao;
(function (Profissao) {
    Profissao[Profissao["Professora"] = 0] = "Professora";
    Profissao[Profissao["Atriz"] = 1] = "Atriz";
    Profissao[Profissao["Desenvolvedora"] = 2] = "Desenvolvedora";
    Profissao[Profissao["JogadoraDeFutebol"] = 3] = "JogadoraDeFutebol";
})(Profissao || (Profissao = {}));
const vanessa = {
    nome: "Vanessa",
    idade: 25,
    profissao: Profissao.Desenvolvedora,
};
const maria = {
    nome: "Maria",
    idade: 23,
    profissao: Profissao.Desenvolvedora,
};
const jessica = {
    nome: "Jessica",
    idade: 24,
    profissao: Profissao.Desenvolvedora,
    materias: ["Matemática", "Programação"],
};
const monica = {
    nome: "Monica",
    idade: 24,
    materias: ["Matemática", "Programação"],
};
function listar(lista) {
    for (const item of lista) {
        console.log("- ", item);
    }
}
listar(monica.materias);
listar(jessica.materias);
