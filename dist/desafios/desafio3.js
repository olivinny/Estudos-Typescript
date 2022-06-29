"use strict";
let botaoAtualizar = document.getElementById("atualizar-saldo");
let botaoLimpar = document.getElementById("limpar-saldo");
var soma = document.getElementById("soma");
let campoSaldo = document.getElementById("campo-saldo");
var saldo = 0;
function somarAoSaldo(soma) {
    saldo = soma + saldo;
    campoSaldo.innerHTML = saldo.toString();
}
function limparSaldo() {
    saldo = 0;
    campoSaldo.innerHTML = "0";
}
function limparSoma() {
    soma.value = "";
}
botaoAtualizar.addEventListener("click", function () {
    somarAoSaldo(Number(soma.value));
    limparSoma();
});
botaoLimpar.addEventListener("click", function () {
    limparSaldo();
});
