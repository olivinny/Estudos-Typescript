let botaoAtualizar = document.getElementById("atualizar-saldo") as HTMLElement;
let botaoLimpar = document.getElementById("limpar-saldo")! as HTMLElement;
var soma = document.getElementById("soma")! as HTMLInputElement;
let campoSaldo = document.getElementById("campo-saldo") as HTMLElement;

var saldo: number = 0;

function somarAoSaldo(soma: number) {
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
