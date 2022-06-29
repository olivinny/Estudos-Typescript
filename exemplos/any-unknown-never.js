"use strict";
let anyVoltou;
anyVoltou = 3;
anyVoltou = "teste";
anyVoltou = 5;
let stringTest = "verificar";
stringTest = anyVoltou;
let unknownValor;
unknownValor = 3;
unknownValor = "opa";
unknownValor = true;
unknownValor = "vai sim";
let stringTest2 = "agora vai";
if (typeof unknownValor === "string") {
    stringTest2 = unknownValor;
}
console.log(stringTest2);
function jogaErro(erro, codigo) {
    throw { erro: erro, code: codigo };
}
jogaErro("deu erro", 500);
